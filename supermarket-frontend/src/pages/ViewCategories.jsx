import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar_manager from "../components/SideBar_manager";

export default function ViewCategories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadCategories();
    },[])

    const loadCategories = async () => {
        const res = await axios.get("http://localhost:8080/categories")
        console.log(res.data)
        setCategories(res.data)
    }

    const navigate = useNavigate()

    return(
        <div style={{ display: "flex" }}>
            <SideBar_manager />
            <div className="profilecard">
                <h1>Categories</h1>
                <div className="viewitemsmain">
                    {
                        categories.map(category => {
                            return(
                                <div class="productcards">
                                    <div className="productimg">
                                        <img src={category.cat_url} alt="productimage" />
                                    </div>
                                    <div class="ppart1">
                                        <p style={{margin:'5px 2px'}}>Category Name: {category.cat_name}</p>
                                        <p style={{margin:'5px 2px'}}>Category Description: {category.cat_desc}</p>
                                    </div>
                                    <div class = "ppart2">
                                        <button className="editbutton" onClick={()=>{navigate("/updateproduct")}}>Edit Category</button><br/>
                                        <button className="deletebutton">Delete Category</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}