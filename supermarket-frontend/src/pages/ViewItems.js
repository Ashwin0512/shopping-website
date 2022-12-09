import React, { useEffect, useState } from "react";
import SideBar_manager from "../components/SideBar_manager";
import { useNavigate } from "react-router-dom";
import "./ViewItems.css";
import axios from "axios";
export default function ViewItems() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (e) => {
    const res = await axios.get("http://localhost:8080/products");
    setProducts(res.data);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar_manager />
      <div className="profilecard">
        <h1>My Products</h1>
        <div className="viewitemsmain">
          {products.map((item) => {
            {console.log(item.product_name)}
            return(
                <div class="productcards" key={item.product_id}>
                <div className="productimg">
                  <img
                    src={item.product_url}
                    alt="productimage"
                  />
                </div>
                <div class="ppart1">
                  <p style={{ margin: "5px 2px" }}>
                    Product Name: {item.product_name}
                  </p>
                  <p style={{ margin: "5px 2px" }}>
                    Products Price: {item.price}
                  </p>
                  <p style={{ margin: "5px 2px" }}>
                    Product Quantity Remaning: {item.stock}
                  </p>
                  <p style={{ margin: "5px 2px" }}>Number of Orders: </p>
                </div>
                <div class="ppart2">
                  <button
                    className="editbutton"
                    onClick={() => {
                      navigate(`../product/edit?id=${item.product_id}`);
                    }}
                  >
                    Edit Product
                  </button>
                  <br />
                  <button className="deletebutton">Delete Product</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
