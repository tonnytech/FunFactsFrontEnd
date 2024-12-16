import React, { useState } from "react";
import { resetPassword } from "../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [resetPasswordError, setResetPasswordError] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  console.log(token);

  const { userRegisterMessage } = useSelector(
    (state) => state.currentUser
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(resetPassword({ formData, token }))
      .unwrap()
      .then((response) => {
        if (response) setIsLoading(false);
        if (response.status === "Success") {
          console.log(response);
          dispatch(setUser(response.data.user));
          navigate("/");
        }

        if (response.status === "fail") {
          setResetPasswordError(response.message);
        }
      })
      .catch((error) => {
        console.error(error);
        if (error) setIsLoading(false);
        setResetPasswordError(error.message);
      });
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          {isLoading ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>Loading...</h1>
            </div>
          ) : (
            ""
          )}

          {resetPasswordError ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>{resetPasswordError}</h1>
            </div>
          ) : (
            ""
          )}

          {userRegisterMessage ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>{userRegisterMessage}</h1>
            </div>
          ) : (
            <>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 font-medium mb-2'>
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={formData.password}
                  name='password'
                  type='password'
                  id='password'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Create a password'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='passwordConfirm'
                  className='block text-gray-700 font-medium mb-2'>
                  Confirm Password
                </label>
                <input
                  onChange={handleChange}
                  name='passwordConfirm'
                  type='password'
                  id='passwordConfirm'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Confirm your password'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'>
                Reset Password
              </button>
            </>
          )}
        </form>
        <p className='text-sm text-center text-gray-600 mt-4'>
          Already have an account?{" "}
          <Link to='/login' className='text-blue-500 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
