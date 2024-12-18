import React, { useState } from "react";
import { AddFact } from "../services/factsServices";
import { useDispatch } from "react-redux";

const AddFactsComponents = () => {
  const dispatch = useDispatch ();
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    Usd: "",
    Ksh: "",
  });
  const [submitFeedback, setSubmitFeedback] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(AddFact(formData))
        .unwrap()
        .then((response) => {
          if (response) {
            setSubmitFeedback(response);
          }
        })
        .catch((error) => {
          setSubmitFeedback(error);
          console.error("Save quiz error:", error);
        });
  };

  return (
    <div>
      <div className='max-w-xl mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form className='flex-col space-y-4' onSubmit={handleSubmit}>
          {submitFeedback ? (
            <div className='text-red-600'>{submitFeedback.status}</div>
          ) : (
            ""
          )}
          <div className='flex flex-col space-y-2'>
            <label className='block font-medium text-gray-700'>Question</label>
            <input
              type='text'
              className='shadow-sm block w-full py-2 sm:text-sm rounded-md text-gray-800 disabled:bg-gray-200 border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
              name='question'
              id='question'
              placeholder='Add question'
              value={formData.question}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='block font-medium text-gray-700'>Answer</label>
            <input
              type='text'
              className='shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
              name='answer'
              id='answer'
              placeholder='Add answer'
              value={formData.answer}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='block font-medium text-gray-700'>Ksh</label>
            <input
              type='number'
              className='shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
              name='Ksh'
              id='Ksh'
              placeholder='Add Ksh'
              value={formData.Ksh}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='block font-medium text-gray-700'>Usd</label>
            <input
              type='number'
              className='shadow-sm block w-full py-2 rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  '
              name='Usd'
              id='Usd'
              placeholder='Add Usd'
              value={formData.Usd}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex justify-end'>
            <button
              className='inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-green-400 appearance-none text-white bg-green-500 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-white w-full'
              type='submit'
              name='_action'
              value='create'>
              <div className='relative'>
                <div className=''>Add content</div>
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
  );
};

export default AddFactsComponents;
