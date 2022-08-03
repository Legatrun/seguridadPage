import { Grid } from "@mui/material";
import { Logo } from "../components";
import { SeguridadLayout } from "../layout/SeguridadLayout";

export const BlogPage = () => {
  return (
    <SeguridadLayout>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="blogContainer"
      >
        <Grid item sm={3}>
          <Logo />
        </Grid>
        <Grid
          container
          bgcolor="rgba(0,0,0,0.5)"
          justifyContent="center"
          py={15}
          color="white"
          my={15}
          sx={{ borderBottom: "2px solid #ffc007" }}
        >
          <Grid item sm={4}>
            <img src="http://www.lionshieldse.com/images/ls/varios/SELLO%20DE%20AGUA.png" alt="leon" />
          </Grid>
          <Grid item sm={4}>
            <h2>CRECIMIENTO DE LA DELINCUENCIA</h2>
            <p>Me he encontrado con dos notas de prensa. La primera es de 09 de septiembre de 2012 y habla de que 563 guardias trabajan en La Paz y que hay 39 Compañías en cumplimiento de la ley.
              563 guardias de empresas privadas vigilan en La Paz

              El Segundo de fecha 20 de agosto de 2014 hace mención a que Ninguna empresa de seguridad privada es legal y que dilatan los tramites.
              Ninguna empresa de seguridad privada es legal; dilatan trámites

              En tiendo que existe demasiada desinformación al respecto, que opinan ustedes al respecto?</p>
          </Grid>
        </Grid>
      </Grid>
    </SeguridadLayout>
  )
}
