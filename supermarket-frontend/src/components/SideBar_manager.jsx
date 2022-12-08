import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"

export default function SideBar_manager() {
  return (
    <div style={{marginLeft: '100px'}}>
        <div className='acc'>
            <span style={{fontWeight: 'bold'}}>Accout Details: </span><br/>
            Shreyans Soni
        </div>
        <div className='sidebar'>
            <ul>
                <li><Link to='/manager/home' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link to='/manager/products/view' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Items</Link></li>
                <li><Link to='/manager/product/add' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Item</Link></li>
                <li><Link to='/manager/categories/view' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Categories</Link></li>
                <li><Link to='/manager/category/add' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Category</Link></li>
                <li><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>
            </ul>
        </div>
    </div>
  )
}
