import React from 'react'
import Navbar from '../components/Navbar'
import "./HomeRaju.css"
import Card from '../components/Card'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function HomeRaju(props) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    loadCategories();
  },[])

  const loadCategories = async () => {
      const res = await axios.get("http://localhost:8080/categories")
      console.log(res.data)
      setCategories(res.data)
  }

  return (
    <>
        <Navbar userId={props.userId}/>
        <div className="carousel"></div>
        <div className="allitems">
            <p>Shop By Catergory</p>
            <div className="container">
              {
                categories.map(category => {
                  return(
                    <Card url={category.cat_url} type={category.cat_name} key={category.cat_id} />
                  )
                })
              }
              <Link to="./products" style={{textDecoration:'none'}}>
                  <Card type="All Products" />
              </Link>
            </div>
        </div>
    </>
  )
}