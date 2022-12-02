import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../components/login/ForgotPassword";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from '../pages/user/Home'
import Error from '../pages/Error'
import Product from "../components/product/Product";
import HomeManager from "../pages/manager/HomeManager";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
                <Route path='*' element={<Error />} />

                <Route path='/product/:id' element={<Product />} />

                <Route path="/manager">
                    <Route path="home" element={<HomeManager />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}