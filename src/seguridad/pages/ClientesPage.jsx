import { Grid, ImageList, Typography } from "@mui/material";
import { Logo } from "../components";
import { SeguridadLayout } from "../layout/SeguridadLayout";
import acero from '../../assets/clientes/acero.png'
import arcoIris from '../../assets/clientes/arcoIris.png'
import arcor from '../../assets/clientes/arcor.png'
import caisy from '../../assets/clientes/caisy.png'
import ferrotodo from '../../assets/clientes/ferrotodo.png'
import fubode from '../../assets/clientes/fubode.png'
import hansa from '../../assets/clientes/hansa.png'
import pagsiete from '../../assets/clientes/pagsiete.png'
import pixar from '../../assets/clientes/pixar.png'
import rengel from '../../assets/clientes/rengel.png'
import serplac from '../../assets/clientes/serplac.png'
import soboce from '../../assets/clientes/soboce.png'

export const ClientesPage = () => {
  return (
    <SeguridadLayout>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="clientesContainer"
      >
        <Grid item sm={3}>
          <Logo />
        </Grid>
        <Grid
          container
          justifyContent="center"
          className="textoFondoOscuro"
        >
          <Grid item sm={12} py={4}>
            <Typography variant="h3" className="title">CLIENTES</Typography>
          </Grid>
          <Grid container py={3} px={{ xs: 3, sm: 45 }}>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={acero} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={arcoIris} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={caisy} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={ferrotodo} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={fubode} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={hansa} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={pagsiete} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={arcor} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={pixar} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={serplac} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={rengel} alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src={soboce} alt="acero" width={"100%"} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </SeguridadLayout>
  )
}
