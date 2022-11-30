import { Box,Typography } from "@mui/material";
import CardCategory from "./CardCategory";

const TopCategoriesArray = [
    {categoryName: 'Fruits and Vegetables', img:'https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=fXqp_CPaHMyfzMhjZGQG1zloNBNkVRjdYKScw3K98XQ=', id:1},
    {categoryName: 'Foodgrains, Oil and Masala', img:'https://www.highwayxpress.com/pub/media/catalog/category/food-and-oil.jpg', id:2},
    {categoryName: 'Bakery, Cakes and Dairy', img:'https://nam.business/images/category/backery%20and%20dairy%20products%20main.png', id:3},
    {categoryName: 'Beverages', img:'https://agronfoodprocessing.com/wp-content/uploads/2021/03/beve.jpg', id:4},
]

export default function TopCategories() {
    return(
        <>
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h4" sx={{marginTop:'2rem'}}>Top Categories</Typography>
            <span style={{display:'flex', padding:'3rem', justifyContent:'space-between'}}>
                {TopCategoriesArray.map(card => 
                    <CardCategory name={card.categoryName} img={card.img}  key={card.id}/>
                )}
            </span>
        </Box>
        </>
    )
}