import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";

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

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.product_id}/>
      ))}
    </Container>
  );
};

export default Products;
