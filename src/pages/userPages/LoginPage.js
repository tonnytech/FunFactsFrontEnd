// src/pages/Login.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { getUser } from "../../services/userServices";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        console.log("Oops! something went wrong. Try again");
      });
  }, [dispatch]);

  const { user } = useSelector((state) => state.currentUser);
  console.log(user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .unwrap()
      .then((response) => {
        if (response.status === "Success") {
          console.log(response);
          dispatch(setUser(response.data.user));
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
        console.log("Oops! something went wrong. Try again");
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              onChange={handleChange}
              id='email'
              name='email'
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
              type='password'
              name='password'
              onChange={handleChange}
              id='password'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Enter your password'
            />
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
              <input type='checkbox' className='form-checkbox text-blue-500' />
              <span className='ml-2 text-gray-600'>Remember me</span>
            </label>
            <button className='text-sm text-blue-500 hover:underline'>
              <Link to='/forgotPassword'>Forgot Password?</Link>
            </button>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'>
            Login
          </button>
        </form>
        <p className='text-sm text-center text-gray-600 mt-4'>
          Don’t have an account?{" "}
          <Link to='/register' className='text-blue-500 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
