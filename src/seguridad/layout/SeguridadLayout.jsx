import { Drawer, Grid, Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, Footer } from "../components"

export const SeguridadLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Grid
        container
        spacing={0}
        // direction="column"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      >
        <Grid
          item
          className="box-shadow"
          xs={12}
          sm={9}
          sx={{
            height: { xs: "100%" },
            backgroundColor: "white"
          }}
        >
          <NavBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
          </Box>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  )
}
