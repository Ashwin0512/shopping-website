import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../components/login/ForgotPassword";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from '../pages/Home'
import Error from '../pages/Error'

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
} 