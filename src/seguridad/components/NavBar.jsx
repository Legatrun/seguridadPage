import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const drawerWidth = 300;


export const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box >

            <AppBar
                component="nav"
                position="fixed"
                className="navbar"
            >
                <Toolbar>
                    <IconButton
                        display="block"
                        position="absolute"
                        color="inherit"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuOutlined />
                    </IconButton>
                    <Grid
                        px={{ sm: 35 }}
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ display: { xs: "none", sm: "flex" }, height: "100%" }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                INICIO
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/nosotros"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                NOSOTROS
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/servicios"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                SERVICIOS
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/clientes"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                CLIENTES
                            </NavLink>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ height: "100%", width: "20%" }}
                        >
                            <NavLink
                                to="/contacto"
                                className={({ isActive }) =>
                                    `link ${isActive ? 'active' : ''}`
                                }
                            >
                                CONTACTO
                            </NavLink>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar >
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >
                    <Grid
                        container
                        direction="column"
                        onClick={handleDrawerToggle}
                        justifyContent="space-around"
                        sx={{
                            textAlign: 'center',
                            backgroundColor: "#353535",
                            height: "100%"
                        }}
                    >
                        <Typography variant="h6" sx={{ my: 2 }} color="white">
                            Lions F1
                        </Typography>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/"
                            underline="none"
                        >
                            Inicio
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/nosotros"
                            underline="none"
                        >
                            Nosotros
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/servicios"
                            underline="none"
                        >
                            Servicios
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/clientes"
                            underline="none"
                        >
                            Clientes
                        </Link>
                        <Link
                            component={RouterLink}
                            color="white"
                            to="/contacto"
                            underline="none"
                        >
                            Contacto
                        </Link>
                    </Grid>
                </Drawer>
            </Box>
        </Box>

    )
}