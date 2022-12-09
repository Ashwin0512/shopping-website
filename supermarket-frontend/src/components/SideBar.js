import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SideBar.css"
import axios from 'axios'

export default function SideBar(props) {
  const navigate = useNavigate()

  const handleDelete = async (e) => {
    if(window.confirm("Are you sure to delete your account?")) {
      await axios.delete(`http://localhost:8080/user/${props.userId}`)
      .then(navigate("/"))
    }
  }

  return (
    <div style={{marginLeft: '100px'}}>
        <div className='acc'>
            <span style={{fontWeight: 'bold'}}>Accout Details </span><br/>
        </div>
        <div className='sidebar'>
            <ul>
                <li><Link to={`/profile/${props.userId}`} className='sidelink' style={{textDecoration: 'none', color:'black'}}>Edit Profile</Link></li>
                <li><Link to='/orders' className='sidelink' style={{textDecoration: 'none', color:'black'}}>View Orders</Link></li>
                <li><Link to='/wallet' className='sidelink' style={{textDecoration: 'none', color:'black'}}>Wallet</Link></li>
                <li onClick={handleDelete}><Link className='sidelink' style={{textDecoration: 'none', color:'red', marginRight:'8px'}}>Delete Account</Link></li>
            </ul>
        </div>
    </div>
  )
}