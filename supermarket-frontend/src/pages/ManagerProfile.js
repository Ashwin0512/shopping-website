import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar_manager from '../components/SideBar_manager'
import {Link} from "react-router-dom";
import './AddCategory.css'
import './ManagerProfile.css'
import './ManageUsers.css'
import Navbar from '../components/Navbar';

export default function ManagerProfile(props) {
  
  console.log(props.managerId)

  let navigate = useNavigate();

  const [manager, setManager] = useState({
    manager_name : "",
    manager_password: '',
    manager_address: "",
    manager_phone: "",
    manager_email: ""
  })
  
  const onInputChange = (e) => {
    setManager({
      ...manager,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    getManagerData();
  }, [])
  

  const getManagerData = async (e) => {
    const res =  await axios.get(`http://localhost:8080/manager/${props.managerId}`)
    console.log(res.data)
    setManager(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:8080/product", product);
    await axios.put(`http://localhost:8080/manager/${props.managerId}`, manager )
    navigate("../home");
  };

  function handleCancel() {
    navigate("../home");
  }

  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
        <SideBar_manager/>
        <div className="profilecard">
        <h1>Edit Profile</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{display:'flex', flexDirection:'column', margin:'-10px auto'}}>
                
                <label style={{marginTop:'2rem'}}>Name</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    // value={product_name}
                    defaultValue={manager.manager_name}
                    name='manager_name'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter product name
                />

                <label style={{marginTop:'2rem'}}>Email Address</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    // value={desc}
                    defaultValue={manager.manager_email}
                    name='manager_email'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter product description'
                    readOnly

                />

                <label style={{marginTop:'2rem'}}>Address</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    // value={discount}
                    defaultValue={manager.manager_address}
                    name='manager_address'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter product discount'

                />

                <label style={{marginTop:'2rem'}}>Mobile Number</label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    // value={product_url}
                    defaultValue={manager.manager_phone}
                    name='manager_phone'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter the url for product image'

                />

                <label style={{marginTop:'2rem'}}>Password</label>
                <input 
                    style={{width:'30vw'}} 
                    type='password'
                    // value={days_to_deliver
                    defaultValue={manager.manager_password}
                    name='manager_password'
                    onChange={(e) => onInputChange(e)}
                    // placeholder='Enter the number of days for delivery'

                />
            </div>
            <div style={{marginTop:'2rem', textAlign:'center'}}>
                <button className="addcatbutton"  type="submit" onClick={handleSubmit} >Submit</button>
                <button className="addcatbutton"  style={{marginLeft:'10px', marginBottom:'30px'}} onClick={handleCancel}>Cancel</button>
            </div>
            </form>
       </div>
    </div>
    </>
  )
}
