import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function ProductCard (props) {

    const [inWishlist, setInWishlist] = useState(false)
    const [inCart, setInCart] = useState(false)
    const [quantity, setQuantity] = useState(0)

    function handleAddToWishlist() {
        if(inWishlist)
            alert("Item removed from wishlist")
        else
            alert("Item added to wishlist")
    }

    function handleAddToCart() {
        if(inCart)
            alert("Item removed from cart")
        else
            alert("Item added to cart")
    }

    return (
        <Card sx={{maxWidth:300}}>
            <CardMedia 
                component='img'
                height='200'
                image={props.img}
            />
            <CardContent sx={{backgroundColor:'#aaa'}}>
                <Box>
                    <RemoveIcon onClick={() => {
                        if(quantity>0)
                        setQuantity(quantity-1)
                    }} />
                    {quantity}
                    <AddIcon onClick={() => {setQuantity(quantity+1)}} />
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', gap:'15px'}}>
                    <Box onClick={() => {
                        setInCart(!inCart)
                        handleAddToCart()
                    }}>
                        {inCart ? <RemoveShoppingCartIcon/> :  <AddShoppingCartIcon />}
                    </Box>
                    <Box onClick={() => {
                        setInWishlist(!inWishlist)
                        handleAddToWishlist()
                    }}>
                        {inWishlist ? <FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </Box>
                    <Box>
                        <ReadMoreIcon/>
                    </Box>
                </Box>
                <Typography>{props.brand}</Typography>
                <Typography>{props.name}</Typography>
                <Typography>₹ {props.mrp}</Typography>
            </CardContent>
        </Card>
    )
}