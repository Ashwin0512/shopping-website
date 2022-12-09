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
import AdminProfile from "./pages/AdminProfile";
import PdfGenerator from "./Reports";
import ViewItems_Admin from "./pages/ViewItems_admin";
import ManageUsers from "./pages/ManageUsers";
import ViewCategories from "./pages/ViewCategories";
import Wallet from "./pages/Wallet";
import Orders from "./pages/Orders";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isManagerLoggedIn, setIsManagerLoggedIn] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [userId, setUserId] = useState()
  const [managerId, setManagerId] = useState()
  const [adminId, setAdminId] = useState()

  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login 
            isUserLoggedIn={isUserLoggedIn}
            isManagerLoggedIn={isManagerLoggedIn}
            isAdminLoggedIn={isAdminLoggedIn}
            setIsUserLoggedIn={setIsUserLoggedIn} 
            setIsManagerLoggedIn={setIsManagerLoggedIn}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
            userId={userId} 
            setUserId={setUserId}
            managerId={managerId} 
            setManagerId={setManagerId}
            adminId={adminId} 
            setAdminId={setAdminId} 
          />
        }
          />

          <Route path='/forgotPassword' element={<ForgotPasseord />} />
          <Route path='/register' element={<Register />}/>
          {/* {isUserLoggedIn && */}
            <>
            <Route path="/home" element={<HomeRaju userId={userId} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:product_id' element={<ProductPage />} />
            <Route path='/categories/:category_name' element={<CategoryPage />} />
            <Route path='/profile/:user_id' element={<Profile userId={userId}/>} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/wallet' element={<Wallet />} />
            </>
          {/* } */}
          

          {/* {isManagerLoggedIn &&  */}
            <Route path="/manager">
              <Route path="home" element={<ManagerProfile managerId={managerId} />} />
              <Route path='product/add' element={<AddProduct />} />
              <Route path='products/view' element={<ViewItems />} />
              <Route path='category/add' element={<AddCategory />}/>
              <Route path='categories/view' element={<ViewCategories />}/>
              <Route path='login' element={<ManagerLogin />}/>
              <Route path='product/edit' element={<UpdateProduct/>}/>
            </Route>
          {/* } */}

          {/* {  isAdminLoggedIn &&  */}
            <Route path="admin">
              <Route path="home" element={<AdminProfile adminId={adminId} />} />
              <Route path="generateReport" element={<PdfGenerator />} />
              <Route path="viewItems" element={<ViewItems_Admin />} />
              <Route path="manageUsers" element={<ManageUsers />} />
            </Route>
          {/* } */}
          
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
// export {isUserLoggedIn}