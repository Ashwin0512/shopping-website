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
import ViewItems from "./pages/ViewItems";
import Profile from "./pages/Profile";
import { useState } from "react";
// import { isUserLoggedIn } from "./pages/Login";

// let isUserLoggedIn = false
// let isManagerLoggedIn = false
// let isAdminLoggedIn = false

const App = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [userId, setUserId] = useState()

  return(
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} userId={userId} setUserId={setUserId} />} />

          <Route path='/forgotPassword' element={<ForgotPasseord />} />
          {/* {isUserLoggedIn && */}
            <>
            <Route path="/" element={<HomeRaju userId={userId} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:product_id' element={<ProductPage />} />
            <Route path='/categories/:category_name' element={<CategoryPage />} />
            <Route path='/profile/:user_id' element={<Profile userId={userId}/>} />
            </>
          {/* }  */}
          

          {/* {isManagerLoggedIn &&  */}
            <Route path="/manager">
              <Route path="home" element={<ManagerProfile />} />
              <Route path='product/add' element={<AddProduct />} />
              <Route path='products/view' element={<ViewItems />} />
              <Route path='category/add' element={<AddCategory />}/>
              <Route path='categories/view' element={<AddCategory />}/>
              <Route path='login' element={<ManagerLogin />}/>
            </Route>
          {/* } */}

          {/* {  isAdminLoggedIn &&  */}
            <Route path="admin">
              <Route path="login" element={<AdminLogin />} />
            </Route>
          {/* } */}
          
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
// export {isUserLoggedIn}