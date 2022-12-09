import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const Login = (props) => {

  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:8080/user/login` , userCreds)
      .then(res => {
        console.log(res.data)
        if(res.data) {
          props.setIsUserLoggedIn(true)
          navigate("/home")
        } else {
          alert("Incorrect Credentials")
        }
      })
    
    const res = await axios.get(`http://localhost:8080/user/byEmail/${userCreds.email}`)
    props.setUserId(res.data.user_id)
  }

  const handleManagerLogin = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:8080/admin/byEmail/${userCreds.email}`)
    props.setManagerId(res.data.user_id)
    await axios.post(`http://localhost:8080/manager/login` , userCreds)
    .then(res => {
      if(res.data) {
        props.setIsManagerLoggedIn(true)
        navigate('/manager/home')
      } else
      {
        alert("Incorrect Credentials")
      }
    })
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:8080/admin/byEmail/${userCreds.email}`)
    props.setAdminId(res.data.user_id)
    await axios.post(`http://localhost:8080/admin/login` , userCreds)
    .then(res => {
      if(res.data) {
        props.setIsAdminLoggedIn(true)
        navigate('/admin/home')
      } else
      {
        alert("Incorrect Credentials")
      }
    })
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
            <Link onClick={handleManagerLogin} href="http://localhost:3000/manager/login"> 
            <Button>Login as Manager</Button>
            </Link>
            <Link onClick={handleAdminLogin} href="http://localhost:3000/admin/login">
              <Button>Login as Admin</Button>
            </Link>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;