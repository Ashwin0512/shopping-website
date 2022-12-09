import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Wallet.css"

export default function Wallet(props) {

  const navigate = useNavigate()

  const getUserDetails = async (e) => {
    const res = await axios.get(`http://localhost:8080/user/${userId}`)
    console.log(res.data)
    setUserDetails(res.data)
  }

  const [userDetails, setUserDetails] = useState({
    user_name: '',
    user_password: '',
    user_address: '',
    user_phone: '',
    user_email: '',
    wallet_balance: 0
  })

  useEffect(() => {
    getUserDetails()
  }, [])

  const userId = props.userId
  console.log(userId)

  const [amountValue, setAmountValue] = useState()

  function addMoney(){
    userDetails.wallet_balance+=parseFloat(amountValue)
    setUserDetails(userDetails)
    // setUserDetails(userDetails.wallet_balance + parseFloat(amountValue)) 
  }

  const handleClickBack = async (e) => {
    await axios.put(`http://localhost:8080/user/${userId}`, userDetails)
    .then(alert("Added Money to your wallet successfully"))
    .then(console.log(userDetails))
    .then(navigate(`../profile/${userId}`))
  }

  function handleAmountSet (e) {
    setAmountValue(e.target.value)
  }

  return (
    <>
        <div className="walletbank">
          <p>PAYMENT WALLET</p>
          <div className="tamount">
            Total Amount: ₹ {userDetails.wallet_balance}
          </div>
          <label htmlFor="amount">₹
          <input type="text" name='amount' onChange={handleAmountSet} placeholder='Amount' value={amountValue} id='amount'/></label>
          <div>
          <button onClick={addMoney} className="addmoney">Add Money</button>
          <button onClick={handleClickBack} className="addmoney">Go Back</button>
          </div>

          {/* <div className="walletcard">
            <div>Total Amount Spent this Month: ₹ 50000<br/>
            Total Transactions: 25</div>
            <div className='pmeth'>Payment Methods</div>
          </div> */}
        </div>
    </>
  )
}

