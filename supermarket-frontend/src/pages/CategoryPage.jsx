import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { mobile } from "../responsive";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export default function CategoryPage () {

    let {category_name} = useParams()
    console.log(category_name)

    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts();
    },[])

    const loadProducts = async () => {
        let temp = []
        const res = await axios.get("http://localhost:8080/products")
        const tempProducts = res.data
        tempProducts.map(product => {
            
            if(product.category === category_name) {
                temp.push(product)
            }
        })
        setProducts(temp)
    }

    return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>{category_name}</Title>
        
        {products.map((item) => (
          <Link to={`../product/${item.product_id}`}>
            <ProductCard 
            url={item.product_url} 
            key={item.product_id}
            price={item.price}
            category={item.category}
            itemname={item.product_name}
            />
          </Link>
        ))}
    </Container>
    )
}