import React from 'react'
import SideBar from '../components/SideBar'
import "./Orders.css"
export default function Orders() {
  return (
    <div style={{display: 'flex'}}> 
        <SideBar/>
        <div className="orderscard">
            <div className='p'>All Orders</div>
            <div className="order">
                <div className="status"><i style={{marginRight: '5px'}} class="bi bi-box-fill"></i>Delivered</div>
                <div className="det">
                    Item Name: Laptop XYZ<br/>
                    Item Price: $200<br/>
                    Quantity: 1
                </div>
            </div>
        </div>
    </div>
  )
}
