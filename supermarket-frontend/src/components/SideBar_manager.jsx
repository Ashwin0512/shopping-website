import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SideBar.css"
import axios from 'axios'

export default function SideBar_manager(props) {

  const navigate = useNavigate()

  const handleDelete = async (e) => {
    if(window.confirm("Are you sure to delete your account?")) {
      await axios.delete(`http://localhost:8080/manager/${props.managerId}`)
      .then(navigate("/"))
    }
  }

  return (
    <div style={{marginLeft: '100px'}}>
        <div className='acc'>
            <span style={{fontWeight: 'bold'}}>Accout Details</span><br/>
        </div>
        <div className='sidebar'>
            <ul>
                <li><Link to='/manager/home' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link to='/manager/products/view' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Products</Link></li>
                <li><Link to='/manager/product/add' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Product</Link></li>
                {/* <li><Link to='/manager/categories/view' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Categories</Link></li> */}
                <li><Link to='/manager/category/add' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Category</Link></li>
                <li onClick={handleDelete}><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>
            </ul>
        </div>
    </div>
  )
}
