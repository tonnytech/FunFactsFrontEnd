import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/userServices";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ForgotPassError, setForgotPassError] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(forgotPassword(formData))
      .unwrap()
      .then((response) => {
        if (response) setIsLoading(false);
        if (response.status === "success") {
          setMessage(response.message);
        } else {
          setForgotPassError("Something went wrong, try again");
        }
      })
      .catch((error) => {
        setAuthError(error.message)
        setIsLoading(false)
        console.error(error);
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          {isLoading ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>Loading...</h1>
            </div>
          ) : (
            ""
          )}

          {authError ? (
            <h4 className='text-red-600 bg-red-100 border border-red-400 rounded-md px-4 py-2 mb-4 text-center'>
              {authError}
            </h4>
          ) : (
            ""
          )}

          {ForgotPassError ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>{ForgotPassError}</h1>
            </div>
          ) : (
            ""
          )}

          {message ? (
            <div className='text-2xl text-center text-red-600 '>
              {" "}
              <h1>{message}</h1>
            </div>
          ) : (
            <>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-medium mb-2'>
                  Email
                </label>
                <input
                  onChange={handleChange}
                  name='email'
                  type='email'
                  id='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your email'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'>
                Reset password
              </button>
            </>
          )}
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

export default ForgotPassword;
