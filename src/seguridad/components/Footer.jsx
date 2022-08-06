import { Link as RouterLink } from "react-router-dom";
import { Grid, IconButton, Link } from "@mui/material"
import { Box, Container } from "@mui/system"
import { FacebookOutlined, Twitter, Instagram, ArrowRight, Home, LocalPhone, PhoneIphone, Email, AccessTime } from "@mui/icons-material";

export const Footer = () => {
    return (
        <footer className="footer">
            <Box
                px={{ xs: 3, sm: 35 }}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={2}>
                            <Box className="title_footer">SERVICIOS</Box>
                            <Box>
                                <Link to="/" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Inicio
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/nosotros" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Nosotros
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/servicios" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Servicios
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/clientes" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Clientes
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/contacto" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Contacto
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className="title_footer">REDES SOCIALES</Box>
                            <Grid display="flex" justifyContent="space-around">
                                <Box
                                    sx={{ margin: 1 }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://www.facebook.com/"
                                        color="white"
                                        underline="none"
                                        sx={{
                                            padding: 2,
                                            backgroundColor: "#1d9bf0",
                                            borderRadius: "50%",
                                            display: "flex",
                                            border: "4px solid #f2ac29"
                                        }}>
                                        <FacebookOutlined sx={{ fontSize: 60 }} />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{ margin: 1 }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://twitter.com/home"
                                        color="white"
                                        underline="none"
                                        sx={{
                                            padding: 2,
                                            backgroundColor: "#1d9bf0",
                                            borderRadius: "50%",
                                            display: "flex",
                                            border: "4px solid #f2ac29"
                                        }}>
                                        <Twitter sx={{ fontSize: 60 }} />
                                    </Link>
                                </Box>

                                <Box
                                    sx={{ margin: 1 }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://www.instagram.com/"
                                        color="white"
                                        underline="none"
                                        sx={{
                                            padding: 2,
                                            backgroundColor: "#1d9bf0",
                                            borderRadius: "50%",
                                            display: "flex",
                                            border: "4px solid #f2ac29"
                                        }}
                                    >
                                        <Instagram sx={{ fontSize: 60 }} />
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="title_footer">CONTACTO</Box>
                            <Box>
                                <Home />
                                Av. 6 de Marzo Nº558 entre calle 6 y 7
                                Ceja - El Alto
                            </Box>
                            <Box>
                                <LocalPhone />
                                none
                            </Box>
                            <Box>
                                <PhoneIphone />
                                72001649
                            </Box>
                            <Box>
                                <Email />
                                lionsf1.seguri.bolivia@gmail.com
                            </Box>
                            <Box>
                                <AccessTime />
                                Lunes a viernes 8.00 - 18.00
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box textAlign="center" mt={{ sm: 10 }} py={{ xs: 2 }} className="copyright">
                COPYRIGHT &reg; {new Date().getFullYear()} LIONS-F1
            </Box>
        </footer>
    )
}
