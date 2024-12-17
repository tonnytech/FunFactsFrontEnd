import React from "react";

const NotificationComponent = (Message) => {
  return (
    <div className='flex justify-center items-center bg-gray-100 py-14'>
      <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md flex items-center space-x-2'>
        <svg
          className='w-6 h-6 text-red-500'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18.364 5.636a9 9 0 11-12.728 0M12 8v4m0 4h.01'
          />
        </svg>
        <span>{`${Message.ErrorMessage}`}</span>
      </div>
    </div>
  );
};

export default NotificationComponent;
