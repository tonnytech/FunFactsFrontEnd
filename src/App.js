import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/userPages/ProfilePage";
import LoginPage from "./pages/userPages/LoginPage";
import RegisterPage from "./pages/userPages/RegisterPage";
// import ProtectedRoute from "./utils/ProtectedRoutes";
import ForgotPassword from "./pages/userPages/ForgotPassword";
import ResetPassword from "./pages/userPages/ResetPassword";
import HomePage from "./pages/factPages/HomePage";

function App() {
  return (
    <main className='mx-auto max-w-screen-lg border-2 px-8 my-2'>
      <BrowserRouter>
        <Routes>
          {/* user routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
