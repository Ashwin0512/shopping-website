import React from "react";
import SideBar_admin from "../components/SideBar_admin";
import { useNavigate } from "react-router-dom";

export default function ManageUsers() {
    const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar_admin />
        <div className="profilecard">
          <h1>Manage Users</h1>
          <div className="viewitemsmain">
            <div style={{height: '16vh'}} class="productcards">
            <div style={{marginLeft: '12px', marginTop: '15px'}} class="ppart1">
                <p>User Name: Raju</p>            
                <p>User ID: </p>            
                <p>User Role: Customer/Manager </p>            
            </div>
            <div class = "ppart2">
                <button className="deletebutton">Delete User</button>
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
