import React, { useEffect, useState } from "react";
import SideBar_admin from "../components/SideBar_admin";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function () {

    const navigate = useNavigate();

    const [managers, setManagers] = useState([])

    useEffect(() => {
      getManagers();
    },[])

    const getManagers = async (e) => {
      const res = await axios.get("http://localhost:8080/managers");
      console.log(res.data)
      setManagers(res.data);
    }

    return (
        <>
        <div style={{ display: "flex" }}>
        <SideBar_admin />
        
        <div className="profilecard">
          <h1>Manage Managers</h1>
            {
            managers.map(user => {
              return(
              <div style={{height: '16vh'}} class="productcards">
                <div style={{marginLeft: '12px', marginTop: '15px'}} class="ppart1">
                    <p>Manager Name: {user.manager_name}</p>            
                    <p>Manager ID: {user.manager_id}</p>          
                    <p>Manager Email: {user.manager_email}</p>          
                    <p>Manager Phone: {user.manager_phone}</p>          
                </div>
                <div class = "ppart2">
                    <button
                     className="deletebutton"
                     onClick={ async() => {
                      if(window.confirm) {
                        await axios.delete(`http://localhost:8080/manager/${user.manager_id}`)
                        .then(alert("Manager Deleted Successfully"))
                        .then(navigate('../home'))
                      }
                     }}
                    >Delete Manager</button>
                </div>
              </div>
              )
             })
            }
        </div>
      </div>
        </>
    )
}