import React from "react";

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-green-500 border-solid bor'></div>
    </div>
  );
};

export default Spinner;
