import { Box, Typography } from "@mui/material";

export default function LatestProducts() {
    return(
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h4">Latest Products</Typography>
            <Box display='flex' justifyContent='space-between' width='35vw' margin='auto' marginTop='1rem'>
                <Typography>New Arrivals</Typography>
                <Typography>Best Sellers</Typography>
                <Typography>Featured</Typography>
                <Typography>Special Offer</Typography>
            </Box>
        </Box>
    )
}