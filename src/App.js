import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/userPages/LoginPage";
import RegisterPage from "./pages/userPages/RegisterPage";
import ForgotPassword from "./pages/userPages/ForgotPassword";
import ResetPassword from "./pages/userPages/ResetPassword";
import HomePage from "./pages/factPages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FactQuestionsPage from "./pages/factPages/FactQuestionsPage";
import UserProfilePage from "./pages/factPages/UserProfilePage";
import BoughtFacts from "./pages/factPages/BoughtFacts";

function App() {
  return (
    <main className='mx-auto max-w-screen-lg border-2 px-8 my-2'>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* user routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<UserProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          {/* questions routes */}
          <Route path='/questions' element={<FactQuestionsPage />} />
          <Route path='/questions/:id' element={<BoughtFacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
