import React from "react";
import SideBar from "../components/SideBar";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();

  const onInputChange = (e) => {
    // setProduct({
    //   ...product,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:8080/product", product);
    navigate("../home");
  };

  function handleCancel() {
    navigate("../home");
  }

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
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
              name="product_name"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product name'
            />

            <label style={{ marginTop: "2rem" }}>Email Address</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              // value={desc}
              name="desc"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product description'
            />

            <label style={{ marginTop: "2rem" }}>Mobile Number</label>
            <input
              style={{ width: "30vw" }}
              type="number"
              // value={product_url}
              name="mobilenumber"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter the url for product image'
            />

            <label style={{ marginTop: "2rem" }}>Address</label>
            <input
              style={{ width: "30vw" }}
              type="text"
              // value={discount}
              name="address"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter product discount'
            />

            <label style={{ marginTop: "2rem" }}>Password</label>
            <input
              style={{ width: "30vw" }}
              type="password"
              // value={days_to_deliver}
              name="password"
              onChange={(e) => onInputChange(e)}
              // placeholder='Enter the number of days for delivery'
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
  );
}
