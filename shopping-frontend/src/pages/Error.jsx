import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ErrorImage from '../util/images/error.jpg'
import { Link } from 'react-router-dom';

export default function Error () {
    return(
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}
    >
        <Container maxWidth="md">
            <Grid container spacing={2}>
            <Grid xs={6}>
                <Typography variant="h1">
                404
                </Typography>
                <Typography variant="h6">
                The page you’re looking for doesn’t exist.
                </Typography>
                <Link to="./home" style={{textDecoration: 'none'}}>
                    <Button variant="contained" sx={{marginTop:'2rem'}}>Back Home</Button>
                </Link>
            </Grid>
            <Grid xs={6}>
                <img
                src={ErrorImage}
                alt=""
                width={500} height={250}
                />
            </Grid>
            </Grid>
        </Container>
    </Box>
    )
}