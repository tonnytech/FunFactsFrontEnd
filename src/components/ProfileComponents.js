import React from "react";

const ProfileComponent = ({ currentUser }) => {
  return (
    <section>
      <div>
        <div className='max-w-xl mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='flex-col space-y-4'>
            <div className='flex flex-col space-y-2'>
              <label className='block font-medium text-gray-700'>
                E-Mail Adress
              </label>
              <input
                type='email'
                className='shadow-sm block w-full py-2 sm:text-sm rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
                name='email'
                placeholder={currentUser.email}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='block font-medium text-gray-700'>
                User Name
              </label>
              <input
                type='text'
                className='shadow-sm block w-full py-2 sm:text-sm rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
                name='password'
                minLength='10'
                placeholder={currentUser.name}
              />
            </div>
            <div className='flex justify-end'>
              <button
                className='inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-green-400 appearance-none text-white bg-green-500 hover:bg-green-700 focus:bg-green-500 focus:ring-offset-white w-full'
                type='submit'
                name='_action'
                value='create'>
                <div className='relative'>
                  <div className=''>Update user</div>
                  <div className='hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg
                      className='animate-spin h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
        {/* ======================================================== */}
        <div className='max-w-xl mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='flex-col space-y-4'>
            <div className='flex flex-col space-y-2'>
              <label className='block font-medium text-gray-700'>
                Current password
              </label>
              <input
                type='password'
                className='shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
                name='currentPassword'
                placeholder='currentPassword'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='block font-medium text-gray-700'>
                New Password
              </label>
              <input
                type='password'
                className='shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
                name='newPassword'
                minLength='5'
                placeholder='new password'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='block font-medium text-gray-700'>
                Confirm Password
              </label>
              <input
                type='password'
                className='shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
                name='confirmPassword'
                minLength='10'
                placeholder='confirm password'
              />
            </div>
            <div className='flex justify-end'>
              <button
                className='inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-green-400 appearance-none text-white bg-green-500 hover:bg-green-700 focus:bg-green-500 focus:ring-offset-white w-full'
                type='submit'
                name='_action'
                value='create'>
                <div className='relative'>
                  <div className=''>Update password</div>
                  <div className='hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <svg
                      className='animate-spin h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
