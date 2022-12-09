import React from "react";
import SideBar_admin from "../components/SideBar_admin";
import { useNavigate } from "react-router-dom";
import "./ViewItems.css"
export default function ViewItems_Admin() {
    const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <SideBar_admin/>
      <div className="profilecard">
        <h1>My Products</h1>
        <div className="viewitemsmain">
            <div class="productcards">
            <div className="productimg">
                <img src="https://source.unsplash.com/150x150?clothes" alt="productimage" />
            </div>
            <div class="ppart1">
            <p style={{margin:'5px 2px'}}>Product Name: </p>
            <p style={{margin:'5px 2px'}}>Products Price: </p>
            <p style={{margin:'5px 2px'}}>Product Quantity Remaning: </p>
            <p style={{margin:'5px 2px'}}>Number of Orders: </p>
            </div>
            <div class = "ppart2">
                <button className="editbutton" onClick={()=>{navigate("/updateproduct")}}>Edit Product</button><br/>
                <button className="deletebutton">Delete Product</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
