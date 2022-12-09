import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar_admin from '../components/SideBar_admin'
import Navbar from '../components/Navbar';

export default function AdminProfile(props) {

  console.log(props.adminId)
  
  let navigate = useNavigate();
  
    const [admin, setAdmin] = useState({
        "admin_id": "",
        "admin_name": "",
        "admin_password": "",
        "admin_address": "",
        "admin_phone": "",
        "admin_email": ""
      })
  useEffect(() => {
    getAdminUser();
  }, [])
  
  const onInputChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const getAdminUser = async(e) => {
    const res = await axios.get("http://localhost:8080/admin/31323334-0000-0000-0000-000000000000")
    console.log(res.data)
    setAdmin(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:8080/admin/31323334-0000-0000-0000-000000000000", admin);
    navigate("../home");
  };

  function handleCancel() {
    navigate("../home");
  }

  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
        <SideBar_admin/>
        <div className="profilecard">
        <h1>Edit Profile</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{display:'flex', flexDirection:'column', margin:'-10px auto'}}>
                
                <label style={{marginTop:'2rem'}}>Name</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    // value={product_name}
                    defaultValue={admin.admin_name}
                    name='admin_name'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter product name'
                />

                <label style={{marginTop:'2rem'}}>Email Address</label>
                <input 
                    style={{width:'30vw'}} 
                    type='email'
                    // value={desc}
                    defaultValue={admin.admin_email}
                    name='admin_email'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter product description'

                />

                <label style={{marginTop:'2rem'}}>Address</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    // value={discount}
                    defaultValue={admin.admin_address}
                    name='admin_address'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter product discount'

                />

                <label style={{marginTop:'2rem'}}>Mobile Number</label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    // value={product_url}
                    defaultValue={admin.admin_phone}
                    name='admin_phone'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter the url for product image'

                />

                <label style={{marginTop:'2rem'}}>Password</label>
                <input 
                    style={{width:'30vw'}} 
                    type='password'
                    // value={days_to_deliver}
                    defaultValue={admin.admin_password}
                    name='admin_password'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter the number of days for delivery'

                />
            </div>
            <div style={{marginTop:'2rem'}}>
                <button className="addcatbutton"  type="submit" onClick={handleSubmit}>Submit</button>
                <button className="addcatbutton"  style={{marginLeft:'10px', marginBottom:'30px'}} onClick={handleCancel}>Cancel</button>
            </div>
            </form>
       </div>
       {/* <Tickets/> */}
    </div>
    </>
  )
}
