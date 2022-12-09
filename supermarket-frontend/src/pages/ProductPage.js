import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import "./ProductPage.css";

export default function ProductPage() {
  const [value, setValue] = useState(1)
  const navigate = useNavigate();
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

  const cartAddition = (product, quantity)=> {
    let value = parseInt(quantity)
    let arr = [];
    if(value > product.stock){
      alert(`${product.product_name} is not available in this quantity.`)
      setValue(product.stock)
      document.getElementById('quantity').value = product.stock;
    } else{
    let newValue = {...product, 'quantity': quantity};
    console.log(newValue);
    if(value == 0){
      alert('Value cannot be 0');
    }else{
      var retrievedData = localStorage.getItem("cartItems");
      navigate('/cart')
      if(retrievedData == null || retrievedData == undefined){
        arr.push(newValue);
        addtoLocal(arr);
      }
      else{
        var cartItemsRetreieved = JSON.parse(retrievedData);
        console.log(cartItemsRetreieved)
        for(let i=0 ; i<cartItemsRetreieved.length; i++){
          arr.push(cartItemsRetreieved[i]);
        }
        arr.push(newValue);
        addtoLocal(arr)
      }
    }
  }
  }
  
  function addtoLocal(arr){
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", JSON.stringify(arr))
  }
  

  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:8080/product/${product_id}`)
    // console.log(res.data)
    setProduct(res.data)
  }
  // console.log(product.price)

  let { product_id } = useParams();

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
          <input type="text" name="quantity" id="quantity" onChange={(e)=>{setValue(e.target.value)}} defaultValue = '1'/>
        </label>

        <button onClick={()=>{
          cartAddition(product,value)
          // navigate('')
        }
          } className="addtocart">Add To Cart</button>
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

