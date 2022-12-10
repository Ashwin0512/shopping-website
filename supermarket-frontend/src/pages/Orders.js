import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SideBar from '../components/SideBar'
import "./Orders.css"
import axios from 'axios'

export default function Orders() {

  const [orders, setOrders] = useState([])
  const getOrders = async () => {
    // const res = await axios.get('http://localhost:8080/orders')
    // setOrders(res.data);
    setOrders=[{'1': 1},{'2': 2}]
  }

  useEffect(() => {
    getOrders();
  }, [])
  
  return (
    <div style={{display: 'flex'}}> 
        <SideBar/>
        <div className="orderscard">
            <div className='p'>All Orders</div>
                {/* {orders.map((item)=>{ */}
                  <div className="order">
                  <div className="status"><i style={{marginRight: '5px'}} class="bi bi-box-fill"></i>Not Delivered</div>
                  <div className="det">
                      Item Name: Apple Macbook<br/>
                      Item Price: 5000<br/>
                      Quantity: 1
                  </div>
              </div>
                  <div className="order">
                  <div className="status"><i style={{marginRight: '5px'}} class="bi bi-box-fill"></i>Not Delivered</div>
                  <div className="det">
                      Item Name: Dell Laptop<br/>
                      Item Price: 6000<br/>
                      Quantity: 1
                  </div>
              </div>
                  
                  
        </div>
    </div>
  )
}
