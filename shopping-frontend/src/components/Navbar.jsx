import { useState } from "react";
import { AppBar, Avatar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button} from "@mui/material"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Menu as MenuIcon } from "@mui/icons-material";

const pages = ['Products', 'Categories'];
const settings = ['Profile', 'Account', 'Wallet', 'Logout'];

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return (
        <>
        <AppBar position="static">
            <Container maxWidth='xl'>
                <Toolbar disableGutters sx={{display:{justifyContent:'space-between'}}}>
                    <Box sx={{display:{md:'flex', alignItems:'center'}}}>
                        <LocalMallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr:2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                            }}
                        >
                            BITSMALL
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 'inherit', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu 
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical:"bottom",
                                horizontal:"left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Box sx={{display:{xs:'flex',md:'flex', alignItems:'center', gap:'1rem'}}}>
                        <ShoppingCartIcon />
                        <Avatar 
                            onClick={handleOpenUserMenu}
                            aria-controls="user-menu-appbar"
                        />

                        <Menu 
                            id='user-menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical:"bottom",
                                horizontal:"left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}