import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = (props) => {
  // console.log(props.userId)
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [user, setUser] = useState({
    user_name: '',
    user_password: '',
    user_address: '',
    user_phone: '',
    user_email: '',
    wallet_balance: 0
  });

  const [order, setOrder] = useState({
    order_date: '',
    ItemID: '',
    user_id: '',
    UserName: '',
    StockOrdered : '',
    total_amount: '',
    order_expected: ''
  })

  let cartItemsRetreieved;
  const [Tamount, setTamount] = useState(0);

  const getCartItems = async () => {
    var retrievedData = localStorage.getItem("cartItems");
    if(retrievedData == undefined || retrievedData == null)
    {
        return (
            'No Data'
        )
    }else{
    cartItemsRetreieved = await JSON.parse(retrievedData);
    setArr(cartItemsRetreieved);
    getTotal(cartItemsRetreieved);
    }
    // console.log(cartItemsRetreieved)
  };

  const getTotal = (array) => {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      value += array[i].price * array[i].quantity;
    }
    setTamount(value);
  };

  const deleteItem = (index) => {
    arr.splice(arr[index],1);
    setArr(arr);
    console.log(arr)
    updateLocal(arr);
    getTotal(arr);
  }

  const updateLocal = (array) => {
    localStorage.removeItem("cartItems");
                            localStorage.setItem(
                              "cartItems",
                              JSON.stringify(array)
                            );
  }

  const getUserInfo = async () => {
    const res = await axios.get(`http://localhost:8080/user/${props.userId}`)
    console.log(res.data)
    setUser(res.data)
    // console.log(props.userId)
  }

  useEffect(() => {
    getUserInfo();
    getCartItems();
  }, []);
 
  const updateUserWallet = (balance) => {
    user.wallet_balance = balance;
    setUser(user);
    axios.put(`http://localhost:8080/user/${props.userId}`,user)
  }
  
  const updateProductStock = async ()=> {
    for(let i=0; i < arr.length ; i++){
      console.log(arr[i].product_id)
      let res = await axios.get(`http://localhost:8080/product/${arr[i].product_id}`)
      res.data.stock = res.data.stock - arr[i].quantity
      axios.put(`http://localhost:8080/product/${arr[i].product_id}`, res.data);
    }
  }

  const updateOrders = (user_id,user_name) => {
    for(let i=0; i<arr.length;i++){
      setOrder({
        order_date: new Date(),
        ItemID: arr[i].product_id,
        user_id: user_id,
        UserName: user_name,
        StockOrdered : arr[i].quantity,
        total_amount: Tamount+350,
        order_expected: "14 Dec, 2022"
      })
      axios.post(`http://localhost:8080/user/${user_id}/placeOrder`, order)
      
    }
  }

  const finalCheckout = () => {
    console.log(Tamount)
    if(user.wallet_balance > (Tamount + 350)){
      let balance = user.wallet_balance - Tamount - 350;
      updateUserWallet(balance);
      updateProductStock();
      updateOrders(user.user_id, user.user_name);
      alert(`Updated wallet balance: ${balance}`)
    }else{
      alert(`${user.user_name} doesnot have enough balance.`)
    }
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({arr.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {arr.map((item)=>{
              return(
                <Product style={{boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.133)', marginRight: '20px', height: '150px', marginTop: '20px'}}>
              <ProductDetail>
                <Image style={{cursor:'pointer'}} src={item.product_url} onClick={()=>{
                  navigate(`/product/${item.product_id}`)
                }} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.product_name}
                  </ProductName>
                  <ProductId>
                    <b>Price:</b> {item.price}
                  </ProductId>
                  {/* <ProductColor color="black" /> */}
                  <ProductSize>
                    <label style={{ margin: "10px 0 0 0px" }} htmlFor="quantity">
                    <b>Quantity:</b> 
                      <input
                        type="text"
                        onChange={(e) => {
                          if (
                            e.target.value == undefined ||
                            e.target.value == NaN
                          ) {
                            item.quantity = "0";
                          } else {
                            item.quantity = e.target.value;
                            console.log(item);
                            setArr(arr);
                            updateLocal(arr);
                            getTotal(arr);
                          }
                        }}
                        name="quantity"
                        style={{
                          width: "25px",
                          marginLeft: "5px",
                          height: "50%",
                        }}
                        defaultValue={parseInt(item.quantity)}
                      />
                      </label>
                  </ProductSize>
                  <button style={{border: 'none', background: 'inherit', width: '20px', cursor: 'pointer', marginLeft: '-5px', fontSize:'16px '}} onClick={()=>{deleteItem(arr.indexOf(item))}} className="cartdelete"><i className="bi bi-trash3-fill"></i></button>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice style={{marginRight: '-180px'}}>₹{item.price * item.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
              )
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹{Tamount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Taxes</SummaryItemText>
              <SummaryItemPrice>₹250</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹{parseInt(Tamount) + 350}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={()=>{finalCheckout()}}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
