import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

export default function SideBar_manager() {
  return (
    <div style={{marginLeft: '100px'}}>
        <div className='acc'>
            <span style={{fontWeight: 'bold'}}>Accout Details: </span><br/>
            Shreyans Soni
        </div>
        <div className='sidebar'>
            <ul>
                <li><Link to='/manager' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Orders</Link></li>
                <li><Link to='/addcategory' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Category</Link></li>
                <li><Link to='/addproduct' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Item</Link></li>
                <li><Link to='/updateproduct' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Update Item</Link></li>
                <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Delete Item</Link></li>
                <li><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>
            </ul>
        </div>
    </div>
  )
}