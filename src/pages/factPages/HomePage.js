import React from "react";
import { Link } from "react-router-dom";
import HandSvg from "../../images/HandSvg";

const HomePage = () => {
  return (
    <section className=''>
      <p className='md:text-xl text-center py-10 md:py-20 md:px-20'>
        Hi, welcome to this FunFact website. This website was developed to test
        paymet systems and user authentication and authorization by selling fun
        facts. You can buy fun facts that are automatically saved to your
        profile. Go ahead and check them out in the next page. 🎭🎉.
      </p>
      <HandSvg />
      <div>
        <div className='mt-12 flex justify-center'>
          <button className='text-3xl font-bold sm:text-5xl border-2 p-2 rounded-lg'>
            <Link to='/questions'>PROCEED</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
