import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "@material-ui/core";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/id/932542786/photo/abstract-blur-people-in-modern-shopping-mall-interior-defocused-background.jpg?s=612x612&w=0&k=20&c=REdBNmuKwxWv6eV1Zf1BqQR5WoUcd1RDRcS0yn3bj3U=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkTo = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [userCreds, setUserCreds] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUserCreds({
      ...userCreds,
      [e.target.name] : e.target.value
    })
  } 

  const handleSubmit = (e) => {
    
  }

  const {email, password} = userCreds

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input 
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <Input 
            placeholder="Password" 
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <Button type="submit">LOGIN</Button>
          <LinkTo href="./forgotPassword">FORGOT PASSWORD?</LinkTo>
          <LinkTo href="./register" >CREATE A NEW ACCOUNT</LinkTo>

          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Link href="http://localhost:3000/manager/login">
            <Button>Manager Login</Button>
            </Link>
            <Link href="http://localhost:3000/admin/login">
              <Button>Admin Login</Button>
            </Link>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
