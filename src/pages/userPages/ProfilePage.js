import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logOutUser } from "../../services/userServices";
import { setUser, resetUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile"); // State for active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const handleLogOut = () => {
    dispatch(logOutUser())
      .unwrap()
      .then((response) => {
        if (response.status === "success") {
          dispatch(resetUser());
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return user ? (
          <div className='mt-6 bg-white rounded shadow-md p-4'>
            <div className='flex items-center space-x-4 mb-4'>
              <img
                className='w-16 h-16 rounded-full object-cover'
                src='https://via.placeholder.com/150'
                alt='User Avatar'
              />
              <div>
                <h2 className='text-xl font-bold text-gray-800'>{user.name}</h2>
                <p className='text-sm text-gray-600'>{user.email}</p>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <h3 className='text-lg font-medium text-gray-800'>Full Name</h3>
                <p className='text-gray-600'>{user.name}</p>
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-800'>Email</h3>
                <p className='text-gray-600'>{user.email}</p>
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-800'>Role</h3>
                <p className='text-gray-600'>{user.role}</p>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        );
      case "About":
        return (
          <div className='mt-6 bg-white rounded shadow-md p-4'>
            <div className='space-y-4 mb-4'>
              <h3 className='text-2xl font-bold'>About this website</h3>{" "}
              <p>
                {user ? `Hi ${user.name}, this` : "This"} website is designed
                provides a secure and user-friendly authentication of users
                through their email addresses before granting access. Designed
                with privacy and security at its core, the system ensures that
                every user’s identity is verified via email confirmation,
                preventing unauthorized access and enhancing trust. This process
                guarantees a seamless login experience while maintaining the
                highest standards of account protection, making it ideal for
                environments that prioritize secure user management.
              </p>
            </div>
          </div>
        );
      default:
        return <h2 className='text-2xl font-bold'>Select an Option</h2>;
    }
  };

  return (
    <div className='container mx-auto md:my-8'>
      <div className='flex justify-center min-h-screen bg-gray-100'>
        {/* Sidebar */}
        <aside
          className={`bg-blue-500 text-white w-64 space-y-6 px-4 py-7 absolute inset-y-0 left-0 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}>
          <div className='flex items-center space-x-2 px-4'>
            <img
              src='https://via.placeholder.com/40'
              alt='Logo'
              className='h-8 w-8'
            />
            <span className='text-xl font-bold'>MyApp</span>
          </div>
          <nav>
            <button
              onClick={() => setActiveSection("profile")}
              className='block py-2.5 px-4 rounded hover:bg-blue-600'>
              Profile
            </button>
            <button
              onClick={() => setActiveSection("About")}
              className='block py-2.5 px-4 rounded hover:bg-blue-600'>
              About
            </button>
            <button
              onClick={handleLogOut}
              className='block py-2.5 px-4 rounded bg-red-400 hover:bg-red-600'>
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className='flex-1 flex flex-col'>
          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-gray-500 p-4 focus:outline-none'
            onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>

          <div className='p-6'>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
