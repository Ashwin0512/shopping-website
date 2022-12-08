import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"

export default function SideBar() {
  return (
    <div style={{marginLeft: '100px'}}>
        <div className='acc'>
            <span style={{fontWeight: 'bold'}}>Accout Details: </span><br/>
            Shreyans Soni
        </div>
        <div className='sidebar'>
            <ul>
                <li><Link to='/profile' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link to='/orders' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Orders</Link></li>
                <li><Link to='/wallet' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Wallet</Link></li>
                <li><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>
            </ul>
        </div>
    </div>
  )
}