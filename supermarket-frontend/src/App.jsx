import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/manager/AddProduct";
import ManagerHome from "./pages/manager/ManagerHome";
import AddCategory from "./pages/manager/AddCategory";
import ManagerLogin from "./pages/manager/ManagerLogin";
import AdminLogin from "./pages/admin/AdminLogin";

const App = () => {

  const isManagerLoggedIn = true
  const isAdminLoggedIn = true

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:product_id' element={<Product />} />

          {isManagerLoggedIn && 
            <Route path="/manager">
              <Route path="home" element={<ManagerHome />} />
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