import { Box, Typography, Link } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";

const newArrivals = [
    {
        img: 'https://a.cdnsbn.com/images/products/l/02141180206.jpg',
        productName : "Chanel Perfume",
        productBrand: 'Chanel',
        productMrp: 650,
        productID: 1
    }
]
const bestSellers = [
    {
        img: 'https://i.gadgets360cdn.com/products/smooth-nourshing-hand-cream-large-21818-38092-1584522584.jpg',
        productName: 'Nivea Hand Cream',
        productBrand: 'Nivea',
        productMrp: 220,
        productID: 2
    }
]
const featured = [
    {
        img: 'https://www.bigbasket.com/media/uploads/p/xxl/40113907_5-sting-energy-drink.jpg',
        productName: 'Sting Energy Drink',
        productBrand: 'PepsiCo',
        productMrp: 40,
        productID: 3
    }
]
const specialOffer = [
    {
        img: 'https://m.media-amazon.com/images/I/61xUrZc2XtL._SX522_.jpg',
        productName: 'Dairy Milk Bites Hazlenut',
        productBrand: 'Cadbury',
        productMrp: 69,
        productID: 4
    }
]

export default function LatestProducts() {

    const [activeCategory, setActiveCategory] = useState(newArrivals)

    return(
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h4">Latest Products</Typography>
            <Box display='flex' justifyContent='space-between' width='35vw' margin='auto' marginTop='1rem'>
                <Link onClick={() => setActiveCategory(newArrivals)}>New Arrivals</Link>
                <Link onClick={() => setActiveCategory(bestSellers)}>Best Sellers</Link>
                <Link onClick={() => setActiveCategory(featured)}>Featured</Link>
                <Link onClick={() => setActiveCategory(specialOffer)}>Special Offer</Link>
            </Box>
            <span style={{display:'flex', padding:'3rem', justifyContent:'space-between'}}>
            {activeCategory.map(product => <ProductCard 
                                            name={product.productName} 
                                            img={product.img} 
                                            brand ={product.productBrand}
                                            mrp={product.productMrp }
                                            key= {product.productID}
                                           />
            )}
            </span>
        </Box>
    )
}