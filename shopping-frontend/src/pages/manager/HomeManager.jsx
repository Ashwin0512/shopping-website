import { Button, Box, Typography, Card, CardContent } from "@mui/material";

export default function HomeManager() {
    return(
        <>
        <Box sx={{textAlign:'right'}}>
            <Button variant="outlined">Logout</Button>
        </Box>

        <Box>
            <Typography variant="h3" gutterBottom>Welcome Back, Manager</Typography>
        </Box>

        <Box sx={{display:'flex', gap:'5rem'}}>
            <Card sx={{width:'25vw'}}>
                <CardContent>
                    <Typography variant="h5">Categories</Typography>
                    <Typography gutterBottom>Manage the Categories section here</Typography>
                    <Button variant="contained">Manage</Button>
                </CardContent>
            </Card>

            <Card sx={{width:'25vw'}}>
                <CardContent>
                    <Typography variant="h5">Products</Typography>
                    <Typography gutterBottom>Manage all the Products here</Typography>
                    <Button variant="contained">Manage</Button>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}