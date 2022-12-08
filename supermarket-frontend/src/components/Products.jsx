import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      loadProducts();
  },[])

  const loadProducts = async () => {
      const res = await axios.get("http://localhost:8080/products")
      console.log(res)
      setProducts(res.data)
  }
  // const link = `./${}`
  return (
    <Container>
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
  );
};

export default Products;
