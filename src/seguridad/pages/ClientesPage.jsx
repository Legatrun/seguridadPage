import { Grid, ImageList, Typography } from "@mui/material";
import { Logo } from "../components";
import { SeguridadLayout } from "../layout/SeguridadLayout";

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
              <img src="https://i.imgur.com/lbQMJYU.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/BzxpDVX.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/aQFAgAY.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/ZgoSZLM.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/k54GLXj.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/D8YcbPH.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/GnjF6jV.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/58OLXeZ.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/AQLaNMh.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/YkaLLjB.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/GnR9JDX.png" alt="acero" width={"100%"} />
            </Grid>
            <Grid item sm={4} width={{ xs: "50%", sm: 300 }}>
              <img src="https://i.imgur.com/S5OgucJ.png" alt="acero" width={"100%"} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </SeguridadLayout>
  )
}
