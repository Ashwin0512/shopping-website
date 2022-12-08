import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    loadCategories();
  },[])

  const loadCategories = async () => {
      const res = await axios.get("http://localhost:8080/categories")
      console.log(res)
      setCategories(res.data)
  }

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
