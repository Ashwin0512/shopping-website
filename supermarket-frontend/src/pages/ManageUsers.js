import React, { useEffect, useState } from "react";
import SideBar_admin from "../components/SideBar_admin";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ManageUsers() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([])

    useEffect(() => {
      getUsers();
    },[])

    const getUsers = async (e) => {
      const res = await axios.get("http://localhost:8080/users");
      console.log(res.data)
      setUsers(res.data);
    }

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar_admin />
        
        <div className="profilecard">
          <h1>Manage Users</h1>
            {
            users.map(user => {
              return(
              <div style={{height: '16vh'}} class="productcards">
                <div style={{marginLeft: '12px', marginTop: '15px'}} class="ppart1">
                    <p>User Name: {user.user_name}</p>            
                    <p>User ID: {user.user_id}</p>          
                    <p>User Email: {user.user_email}</p>          
                    <p>User Phone: {user.user_phone}</p>          
                </div>
                <div class = "ppart2">
                    <button
                     className="deletebutton"
                     onClick={ async() => {
                      if(window.confirm) {
                        await axios.delete(`http://localhost:8080/user/${user.user_id}`)
                        .then(alert("User Deleted Successfully"))
                        .then(navigate('../home'))
                      }
                     }}
                    >Delete User</button>
                </div>
              </div>
              )
             })
            }
        </div>
      </div>
    </>
  );
}