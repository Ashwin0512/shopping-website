import { useParams } from "react-router-dom"

const product = {
    img: 'https://a.cdnsbn.com/images/products/l/02141180206.jpg',
    productName : "Chanel Perfume",
    productBrand: 'Chanel',
    productMrp: 650,
    productID: 3254234
}

export default function Product() {
    
    const {id} = useParams()
    
    return (
        <div>
            <h1>{id}</h1>
            <h1>{product.productName}</h1>
        </div>
    )
}