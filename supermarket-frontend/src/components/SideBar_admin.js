import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./SideBar.css"

export default function SideBar_admin(props) {

  const navigate = useNavigate()

  const handleDelete = async (e) => {
    if(window.confirm("Are you sure to delete your account?")) {
      await axios.delete(`http://localhost:8080/admin/${props.adminId}`)
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
                <li><Link to='/admin/home' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link to='/admin/generateReport' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Generate Report</Link></li>
                <li><Link to='/admin/viewItems' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Products</Link></li>
                <li><Link to='/admin/addItems' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Product</Link></li>
                <li><Link to='/admin/manager/add' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Manager</Link></li>
                <li><Link to='/admin/managers/view' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Managers</Link></li>
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Category</Link></li> */}
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Item</Link></li> */}
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Update Item</Link></li> */}
                <li><Link to='/admin/manageUsers' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Manage Users</Link></li>
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Delete Item</Link></li> */}
                <li onClick={handleDelete} ><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>

            </ul>
        </div>
    </div>
  )
}
