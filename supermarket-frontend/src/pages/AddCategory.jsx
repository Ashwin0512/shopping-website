import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./AddCategory.css"
import SideBar_manager from '../components/SideBar_manager'
import Navbar from '../components/Navbar';


export default function AddCategory() {
    let navigate = useNavigate()

    const [category, setCategory] = useState({
        cat_name: "",
        cat_desc: "",
        cat_url: "",
    })

    const {cat_name,cat_desc,cat_url} = category

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:8080/category/add',category)
        navigate("../home")
    }

  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
    <SideBar_manager/>
        <div className='profilecard'> 
        <h1>Add Product Category</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="cat_name">Category Name: </label>
            <input 
                placeholder="Enter category name"
                type="text"
                value={cat_name}
                name='cat_name'
                onChange={(e) => handleChange(e)}
            />
            

            <label htmlFor="cat_desc">Category Description: </label>
            <input
                placeholder="Enter category description"
                type="textarea"
                value={cat_desc}
                name='cat_desc'
                onChange={(e) => handleChange(e)}
            />

            <label htmlFor="cat_url">Category Image URL: </label>
            <input
                placeholder="Enter image Url"
                type="url"
                value={cat_url}
                name='cat_url'
                onChange={(e) => handleChange(e)}
            />
            <button className='addcatbutton' type="submit">Submit</button>
        </form>
        </div>
        </div>
        </>
  )
}
