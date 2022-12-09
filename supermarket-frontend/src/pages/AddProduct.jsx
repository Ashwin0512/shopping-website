import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import SideBar_manager from "../components/SideBar_manager"
export default function AddProduct () {

    let navigate = useNavigate()

    const [product, setProduct] = useState({
        product_name:'',
        price:'',
        desc:'',
        category:'',
        discount:'',
        product_url:'',
        days_to_deliver:'',
        stock:''
    })

    const {product_name,price,desc,discount,product_url,days_to_deliver, stock} = product

    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadCategories()
    },[])

    const loadCategories = async () => {
        const res = await axios.get("http://localhost:8080/categories")
        setCategories(res.data)
    }

    const onInputChange = (e) =>  {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/product",product)
        navigate("../home")
    }

    function handleCancel() {
        navigate("../home")
    }

    return (
        <>
        <Navbar />
        <div style={{ display: "flex" }}>
        <SideBar_manager/>

        <div className='profilecard'> 
        <div>
            <h1>Add New Product</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{display:'flex', flexDirection:'column', margin:'-10px auto'}}>
                
                <label style={{marginTop:'2rem'}}>Name: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    value={product_name}
                    name='product_name'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter product name'
                />

                <label style={{marginTop:'2rem'}}>Price: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={price}
                    name='price'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter product price'

                />

                <label style={{marginTop:'2rem'}}>Description: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    value={desc}
                    name='desc'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter product description'

                />

                <label style={{marginTop:'2rem'}}>Category: </label>
                <div>
                    {
                        categories.map(category => {
                            return(
                                <>
                                <input 
                                    type="radio" 
                                    value={category.cat_name} 
                                    name="category" 
                                    onChange={(e) => onInputChange(e)}
                                    style={{margin: '12px 10px', paddingTop:'5px', width: '18px'}}
                                />
                                <label>{category.cat_name}</label>
                                </>
                            )
                        })
                    }
                </div>
                <label style={{marginTop:'2rem'}}>Discount: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={discount}
                    name='discount'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter product discount'

                />

                <label style={{marginTop:'2rem'}}>Image URL: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='url'
                    value={product_url}
                    name='product_url'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter the url for product image'

                />

                <label style={{marginTop:'2rem'}}>Days to Deliver: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={days_to_deliver}
                    name='days_to_deliver'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter the number of days for delivery'

                />

                <label style={{marginTop:'2rem'}}>Stock: </label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={stock}
                    name='stock'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter the product stock available'

                />
            </div>
            <div style={{marginTop:'2rem'}}>
                <button className="addcatbutton" type="submit" onClick={handleSubmit}>Submit</button>
                <button className="addcatbutton" style={{marginLeft:'10px', marginBottom:'30px'}} onClick={handleCancel}>Cancel</button>
            </div>
            </form>
        </div>
        </div>
        </div>
        </>
    )
}