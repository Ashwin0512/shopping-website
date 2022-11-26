import { Box,Typography } from "@mui/material";
import CardCategory from "./CardCategory";

const TopCategoriesArray = [
    {categoryName: 'Fruits and Vegetables', img:'https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ='},
    {categoryName: 'Foodgrains, Oil and Masala', img:'https://www.highwayxpress.com/pub/media/catalog/category/food-and-oil.jpg'},
    {categoryName: 'Bakery, Cakes and Dairy', img:'https://nam.business/images/category/backery%20and%20dairy%20products%20main.png'},
    {categoryName: 'Beverages', img:'https://www.pngkey.com/png/detail/39-398939_alcoholic-drinks-png-alcoholic-beverages.png'},
]

export default function TopCategories() {
    return(
        <>
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h4" sx={{marginTop:'2rem'}}>Top Categories</Typography>
            <span style={{display:'flex', padding:'3rem', justifyContent:'space-between'}}>
                {TopCategoriesArray.map(card => 
                    <CardCategory name={card.categoryName} img={card.img} key={card} />
                )}
            </span>
        </Box>
        </>
    )
}