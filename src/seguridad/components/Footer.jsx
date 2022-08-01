import { Link as RouterLink } from "react-router-dom";
import { Grid, IconButton, Link } from "@mui/material"
import { Box, Container } from "@mui/system"
import { FacebookOutlined, Twitter, Instagram, ArrowRight, Home, LocalPhone, PhoneIphone, Email } from "@mui/icons-material";

export const Footer = () => {
    return (
        <footer className="footer">
            <Box
                px={{ xs: 3, sm: 35 }}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <Box className="title_footer">SERVICIOS</Box>
                            <Box>
                                <Link to="/" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Seguridad
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/nosotros" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Empresas
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/servicios" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Hogar
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/blog" color="white" underline="none" component={RouterLink}>
                                    <IconButton color="action">
                                        <ArrowRight />
                                    </IconButton>
                                    Hogar
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
                        <Grid item xs={12} sm={3}>
                            <Box className="title_footer">CONTACTO</Box>
                            <Box>
                                <Home />
                                Avenida 6 de Marzo No 558 Zona 12 de Octubre
                            </Box>
                            <Box>
                                <LocalPhone />
                                none
                            </Box>
                            <Box>
                                <PhoneIphone />
                                76232616
                            </Box>
                            <Box>
                                <Email />
                                none@gmail.com
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
