import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddCategory () {

    let navigate = useNavigate()

    const [product, setProduct] = useState({
        product_name:'',
        price:'',
        desc:'',
        category:'',
        discount:'',
        product_url:'',
        days_to_deliver:''
    })

    const {product_name,price,desc,category,discount,product_url,days_to_deliver} = product

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
        <div>
            <h1>ADD PRODUCT</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{display:'flex', flexDirection:'column'}}>
                
                <label style={{marginTop:'2rem'}}>Name</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    value={product_name}
                    name='product_name'
                    onChange={(e) => onInputChange(e)}
                />

                <label style={{marginTop:'2rem'}}>Price</label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={price}
                    name='price'
                    onChange={(e) => onInputChange(e)}
                />

                <label style={{marginTop:'2rem'}}>Description</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    value={desc}
                    name='desc'
                    onChange={(e) => onInputChange(e)}
                />

                <label style={{marginTop:'2rem'}}>Category</label>
                <input 
                    style={{width:'30vw'}} 
                    type='text'
                    value={category}
                    name='category'
                    onChange={(e) => onInputChange(e)}
                />

                <label style={{marginTop:'2rem'}}>Discount</label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={discount}
                    name='discount'
                    onChange={(e) => onInputChange(e)}
                />

                <label style={{marginTop:'2rem'}}>Image URL</label>
                <input 
                    style={{width:'30vw'}} 
                    type='url'
                    value={product_url}
                    name='product_url'
                    onChange={(e) => onInputChange(e)}
                />

                <label style={{marginTop:'2rem'}}>Days to Deliver</label>
                <input 
                    style={{width:'30vw'}} 
                    type='number'
                    value={days_to_deliver}
                    name='days_to_deliver'
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div style={{marginTop:'2rem'}}>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            </form>
        </div>
    )
}