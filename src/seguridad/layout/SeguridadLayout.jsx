import { Drawer, Grid, Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, Footer } from "../components"

export const SeguridadLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Grid
        container
        // direction="column"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: { xs: "100%" }
          }}
        >
          <NavBar />
          <Box component="main" className="boxLayout">
            <Toolbar className="toolbarLayout" />
            {children}
          </Box>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  )
}
