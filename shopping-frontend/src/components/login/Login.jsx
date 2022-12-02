import * as React from 'react';
import { Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox, Grid, Link, Box, Typography, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Login() {

  const navigate = useNavigate()
  const routeChange = () => {
    const path = "home"
    navigate(path)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currenta);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

//   const backgroundStyle = {
//     paperContainer: {
//         backgroundImage: `url(${Image})`
//     }
//   }

  return (
    <ThemeProvider theme={theme}>
    {/* <Paper style={backgroundStyle.paperContainer} sx={{height: '100%'}} elevation={0}> */}
      <Container component="main" maxWidth='xs' sx={{height:"100vh",marginTop:8}}>
        {/* <Paper sx={{padding:4}}> */}
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {routeChange()}}
            >
              Sign In
            </Button>
            
            <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
            <Button 
              variant='outlined'
              sx={{width:'48%'}}
            >
              Sign In As Manager
            </Button>
            <Button 
              variant='outlined'
              sx={{width:'48%'}}
            >
              Sign In As Admin
            </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="./forgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* </Paper> */}
      </Container>
    {/* </Paper> */}
    </ThemeProvider>
  );
}