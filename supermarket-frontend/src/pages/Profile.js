import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "./Profile.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Profile(props) {
  const { user_id } = useParams()
  console.log(user_id)
  let navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    user_name: '',
    user_password: '',
    user_address: '',
    user_phone: '',
    user_email: ''
  })

  const onInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async (e) => {
    const res = await axios.get(`http://localhost:8080/user/${user_id}`)
    console.log(res.data)
    setUserDetails(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${user_id}`, userDetails)
    .then(alert("User details updated successfully"))
    // navigate("../home");
  };

  function handleCancel() {
    navigate("/");
  }

  // console.log(sessionStorage.getItem("userId"))

  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
      <SideBar userId={props.userId}/>
      <div className="profilecard">
        <h1>Edit Profile</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "-10px auto",
            }}
          >
            <label style={{ marginTop: "2rem" }}>Name</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              // value={product_name}
              name="user_name"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product name'
              defaultValue={userDetails.user_name}
            />

            <label style={{ marginTop: "2rem" }}>Email Address</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              // value={desc}
              name="user_email"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product description'
              defaultValue={userDetails.user_email}
              readOnly
            />

            <label style={{ marginTop: "2rem" }}>Mobile Number</label>
            <input
              style={{ width: "30vw" }}
              type="number"
              // value={product_url}
              name="user_phone"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter the url for product image'
              defaultValue={userDetails.user_phone}
            />

            <label style={{ marginTop: "2rem" }}>Address</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              // value={discount}
              name="user_address"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product discount'
              defaultValue={userDetails.user_address}
            />

            <label style={{ marginTop: "2rem" }}>Password</label>
            <input
              style={{ width: "30vw" }}
              type="password"
              // value={days_to_deliver}
              name="user_password"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter the number of days for delivery'
              defaultValue={userDetails.user_password}
            />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button
              style={{ marginLeft: "10px", marginBottom: "30px" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
