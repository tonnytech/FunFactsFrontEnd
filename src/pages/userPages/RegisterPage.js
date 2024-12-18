import React, { useState, useEffect } from "react";
import { registerUser } from "../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (authError) {
      const timer = setTimeout(() => {
        setAuthError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [authError]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userIsLoading, userError, userRegisterMessage } = useSelector(
    (state) => state.currentUser
  );

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
        <form onSubmit={handleSubmit}>
          {userIsLoading ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>Loading...</h1>
            </div>
          ) : (
            ""
          )}

          {userError ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>{userError}</h1>
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
                  htmlFor='name'
                  className='block text-gray-700 font-medium mb-2'>
                  First and last name
                </label>
                <input
                  onChange={handleChange}
                  required
                  name='name'
                  type='text'
                  id='name'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your full name'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-medium mb-2'>
                  Email
                </label>
                <input
                  onChange={handleChange}
                  required
                  name='email'
                  type='email'
                  id='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 font-medium mb-2'>
                  Password
                </label>
                <input
                  required
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
                  required
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
                Register
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

export default RegisterPage;
