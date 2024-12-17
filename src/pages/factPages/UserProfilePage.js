import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileComponent from "../../components/ProfileComponents";
import AddFactsComponents from "../../components/AddFactsComponents";
import NotificationComponent from "../../components/NotificationComponents";
import QuestionBlock from "../../components/QuestionBlock";
import Spinner from "../../components/Spinner";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState("About");
  const { user } = useSelector((state) => state.currentUser);

  //from paid quizes
  const paidQuizesIsLoading = false;
  const paidQuizes = [];

  const menuContent = {
    About: <ProfileComponent currentUser={user} />,
    Saved: (
      <div>
        {paidQuizes.length ? (
          paidQuizes.map((quiz) => {
            return <QuestionBlock quizBlock={quiz} key={quiz._id} />;
          })
        ) : (
          <NotificationComponent ErrorMessage={"No saved Fun-facts"} />
        )}
      </div>
    ),
    Add: <AddFactsComponents />,
  };

  const handleMenuClick = (menu) => {
    return setSelectedMenu(menu);
  };

  return (
    <section>
      <div className='flex md:mt-10 flex-col md:flex-row'>
        <div className=' w-full md:w-1/4 md:h-screen bg-indigo-50 md:sticky md:top-0 p-4 flex gap-2 md:flex-col md:text-center'>
          <h2 className='md:text-lg md:font-bold md:mb-4 hidden md:block'>
            Navigation
          </h2>
          <ul className='list-none flex space-x-2 md:flex-col md:space-x-0'>
            <li className='mb-2'>
              <button
                className={`text-gray-700 hover:text-gray-900 ${
                  selectedMenu === "About" ? "font-bold text-indigo-700" : ""
                }`}
                onClick={() => handleMenuClick("About")}>
                About Me
              </button>
            </li>
            <li className='mb-2'>
              <button
                className={`text-gray-700 hover:text-gray-900 ${
                  selectedMenu === "Saved_Facts"
                    ? "font-bold text-indigo-700"
                    : ""
                }`}
                onClick={() => handleMenuClick("Saved")}>
                Saved Facts
              </button>
            </li>
            {user && user.role === "Admin" ? (
              <li className='mb-2'>
                <button
                  className={`text-gray-700 hover:text-gray-900 ${
                    selectedMenu === "Add" ? "font-bold text-indigo-700" : ""
                  }`}
                  onClick={() => handleMenuClick("Add")}>
                  Add FunFact
                </button>
              </li>
            ) : (
              ""
            )}
            <li className='mb-2'>
              <Link
                className={`text-gray-700 hover:text-gray-900 ${
                  selectedMenu === "About" ? "font-bold text-indigo-700" : ""
                }`}
                to='/questions'>
                All Facts
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:w-3/4 bg-white p-4'>
          {paidQuizesIsLoading ? (
            <Spinner />
          ) : (
            menuContent[selectedMenu] || (
              <div>Select a menu to view content.</div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
