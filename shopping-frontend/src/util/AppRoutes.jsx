import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Login } from "../components/home/Login";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}