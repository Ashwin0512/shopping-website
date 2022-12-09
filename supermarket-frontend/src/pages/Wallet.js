import React, { useState } from 'react'
import "./Wallet.css"

export default function Wallet() {
  const [amount, setAmount] = useState(1000)
  function addmoney(value){
    setAmount(amount+parseInt(value));
  }
  return (
    <>
        <div className="walletbank">
          <p>PAYMENT WALLET</p>
          <div className="tamount">
            Total Amount: ${amount}
          </div>
          <label htmlFor="amount">₹
          <input type="text" name='amount' placeholder='Amount' id='amount'/></label>
          <div>
          <button onClick={()=>{addmoney(document.getElementById('amount').value)}} className="addmoney">Add Money</button>
          </div>

          <div className="walletcard">
            <div>Total Amount Spent this Month: $50000<br/>
            Total Transactions: 25</div>
            <div className='pmeth'>Payment Methods</div>
          </div>
        </div>
    </>
  )
}

