import ProductPage from "./pages/ProductPage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ManagerHome from "./pages/ManagerHome";
import ManagerProfile from "./pages/ManagerProfile";
import AddCategory from "./pages/AddCategory"
import ManagerLogin from "./pages/ManagerLogin";
import AdminLogin from "./pages/AdminLogin";
import ForgotPasseord from "./pages/ForgotPassword";
import HomeRaju from "./pages/HomeRaju";
import CategoryPage from "./pages/CategoryPage";
import Profile from "./pages/Profile";

const App = () => {

  const isManagerLoggedIn = true
  const isAdminLoggedIn = true

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeRaju />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotPassword' element={<ForgotPasseord />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:product_id' element={<ProductPage />} />
          <Route path='/categories/:category_name' element={<CategoryPage />} />
          <Route path='/profile/:user_id' element={<Profile />} />

          {isManagerLoggedIn && 
            <Route path="/manager">
              <Route path="home" element={<ManagerProfile />} />
              <Route path='product/add' element={<AddProduct />} />
              <Route path='category/add' element={<AddCategory />}/>
              <Route path='login' element={<ManagerLogin />}/>
            </Route>
          }

          {
            isAdminLoggedIn &&
            <Route path="admin">
              <Route path="login" element={<AdminLogin />} />
            </Route>
          }
          
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;