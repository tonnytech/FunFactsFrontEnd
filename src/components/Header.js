import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../services/userServices";
import { setUser } from "../redux/slices/userSlice";
import { logOutUser } from "../services/userServices";
import { resetUser } from "../redux/slices/userSlice"; // from local store

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          dispatch(setUser(response.data.user));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logOutUser())
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          dispatch(resetUser());
          navigate("/questions");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className='z-50 bg-white border-b backdrop-blur-lg bg-opacity-80 pr-10'>
      <div className='mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 '>
        <div className='relative flex h-16 sm:justify-between gap-16'>
          <div className='flex flex-1 items-stretch justify-start'>
            <Link className='flex flex-shrink-0 items-center' to='/'>
              FUN_FACTS
            </Link>
          </div>
          <div className='flex-shrink-0 flex px-2 py-3 items-center space-x-2 md:space-x-8'>
            {user ? (
              <button
                onClick={handleLogout}
                className='text-yellow-700 hover:text-indigo-700 text-xsm md:text-sm font-medium'>
                Logout
              </button>
            ) : (
              <Link
                className='text-yellow-700 hover:text-indigo-700 text-xsm md:text-sm font-medium'
                to='/login'>
                Login
              </Link>
            )}
            {user ? (
              <Link
                className='text-yellow-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm '
                to='/profile'>
                Profile
              </Link>
            ) : (
              <Link
                className='text-yellow-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm '
                to='/register'>
                Sign up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
