import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"

export default function SideBar_admin() {
  return (
    <div style={{marginLeft: '100px'}}>
        <div className='acc'>
            <span style={{fontWeight: 'bold'}}>Accout Details: </span><br/>
            Shreyans Soni
        </div>
        <div className='sidebar'>
            <ul>
                <li><Link to='/admin/home' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link to='/admin/generateReport' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Generate Report</Link></li>
                <li><Link to='/admin/viewitems' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Items</Link></li>
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Category</Link></li> */}
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Add Item</Link></li> */}
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Update Item</Link></li> */}
                <li><Link to='/admin/manageUsers' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Manage Users</Link></li>
                {/* <li><Link className='sidelink' style={{textDecoration: 'none', color:'black'}}>Delete Item</Link></li> */}
                <li><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>

            </ul>
        </div>
    </div>
  )
}
