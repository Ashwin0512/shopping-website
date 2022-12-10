import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
var bcrypt = require('bcryptjs');

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync("B4c0/\/", salt);

  let navigate = useNavigate()

  const [user, setUser] = useState({
    user_address: '',
    user_email: '',
    user_name: '',
    user_phone: '',
    user_password: '',
    user_cnf_password: '',
    wallet_balance: 1000,
    userLoggedIn: false
  })

  const {user_address, user_email, user_name, user_phone,user_password, user_cnf_password} = user

  const onInputChange = (e) =>  {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(user.user_password === user.user_cnf_password) {
      await axios.post("http://localhost:8080/add/user", user)
      console.log(hash)
      navigate("/")
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input 
            placeholder="Name"
            type="text"
            value={user_name}
            name='user_name'
            onChange={(e) => onInputChange(e)}
          />
          <Input 
            placeholder="Email" 
            type="email"
            value={user_email}
            name='user_email'
            onChange={(e) => onInputChange(e)}
          />
          <Input 
            placeholder="Phone"
            type="phone"
            value={user_phone}
            name='user_phone'
            onChange={(e) => onInputChange(e)}
           />
          <Input 
            placeholder="Address" 
            type="text"
            value={user_address}
            name='user_address'
            onChange={(e) => onInputChange(e)}
          />
          <Input 
            placeholder="Password"
            type="password"
            value={user_password}
            name='user_password'
            onChange={(e) => onInputChange(e)}
          />
          <Input 
            placeholder="Confirm Password" 
            type="password"
            value={user_cnf_password}
            name='user_cnf_password'
            onChange={(e) => onInputChange(e)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
