import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import "./ProductPage.css";

export default function ProductPage() {

  const [product, setProduct] = useState({
    product_id: "",
    product_name: "",
    category: "",
    desc: "",
    discount: "",
    price: "",
    product_id : "",
    product_url : "",
    days_to_deliver : "",
    stock: ""
  })

  useEffect(() => {
    loadProduct();
  },[])

  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:8080/product/${product_id}`)
    console.log(res.data)
    setProduct(res.data)
  }
  console.log(product.price)

  let { product_id } = useParams();

  const navigate = useNavigate();

  let date = new Date()
  date.setDate(date.getDate() + product.days_to_deliver)

  return (
    <>
    <Navbar />
    <div className="main">
      <div className="itemimage">
        <img src={product.product_url} alt="Image of Item" />
      </div>
      <div className="productdetails">
        <h1>{product.product_name}</h1>
        <p className="price">{`₹ ${product.price}`}</p>
        <p className="discountp">{`Discounted Price : ₹ ${product.price - (product.discount*product.price/100)}`}</p>
        <label htmlFor="quantity">
          {" "}
          Quantity:
          <input type="text" name="quantity" id="quantity" defaultValue = '1'/>
        </label>

        <button className="addtocart">Add To Cart</button>
        <p className="success" style={{color: "green" ,fontWeight:"bold", fontSize: "18px"}}>In Stock</p>
        <label style={{marginBottom: "6px"}} htmlFor="delivery">Delivery: 
        <input type="text" name="delivery" id="delivery" placeholder="Enter your pincode"/>
        <button onClick={()=> {document.getElementById('del').innerHTML = "Delivery by " + date}} className="check">Check</button>
        </label>
        <p id="del"></p>
        <p className="productdesc">{product.desc}</p>

      </div>
    </div>
    </>
  );
}

// function cartAddition(product, itemprice,navigate){
//   let quan = document.getElementById('quantity').value;
//   // console.log(quan);
//   let arr = [];
//   let newValue = {
//     'name': product,
//     'quantity': quan,
//     'price' : itemprice
//   };
//   if(quan == null || quan == 0){
//     alert('Value cannot be 0');
//   }else{
//     var retrievedData = localStorage.getItem("cartItems");
//     var cartItemsRetreieved = JSON.parse(retrievedData);
//     console.log(cartItemsRetreieved)
//     navigate("/cart")
//     if(cartItemsRetreieved == null || cartItemsRetreieved == 0){
//       arr.push(newValue);
//       addtoLocal(arr);
//     }
//     else{
//       for(let i=0 ; i<cartItemsRetreieved.length; i++){
//         arr.push(cartItemsRetreieved[i]);
//       }
//       arr.push(newValue);
//       addtoLocal(arr)
//     }
//   }
// return(
//   <h1>ProductPage</h1>
// )

// }

function addtoLocal(arr){
  localStorage.removeItem("cartItems");
  localStorage.setItem("cartItems", JSON.stringify(arr))
}