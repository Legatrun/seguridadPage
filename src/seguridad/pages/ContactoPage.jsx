import { SeguridadLayout } from "../layout/SeguridadLayout";
import { Mapa } from '../components/Mapa'
import { Box, Grid } from "@mui/material";
import { Logo } from "../components";

export const ContactoPage = () => {

  return (
    <SeguridadLayout>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="black"
      >
        <Grid item sm={3}>
          <Logo />
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          <Grid
            item
            xs={10}
            color={"#ffc007"}
            className="contactoTitle"
            my={5}
          >
            <h1>ENCUENTRENOS EN:</h1>
          </Grid>
          <Grid
            item
            sm={10}
            xs={12}
            my={4}
            sx={{ height: "400px" }}
          >
            <Mapa />
          </Grid>
        </Grid>
      </Grid>
    </SeguridadLayout>
  )
}
