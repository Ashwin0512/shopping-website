import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ManagerHome from "./pages/ManagerHome";
import AddCategory from "./pages/AddCategory";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:product_id' element={<Product />} />

          <Route path="/manager">
            <Route path="home" element={<ManagerHome />} />
            <Route path='product/add' element={<AddProduct />} />
            <Route path='category/add' element={<AddCategory />}/>
          </Route>
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;