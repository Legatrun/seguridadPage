import { SeguridadLayout } from "../layout/SeguridadLayout";
import { Logo } from "../components";
import { Box, Grid, Typography } from "@mui/material";
import { CrisisAlert } from "@mui/icons-material";


export const NosotrosPage = () => {
  return (
    <SeguridadLayout>
      <Grid
        color="white"
        container
        justifyContent="center"
        className="nosotrosContainer"
        sx={{ backgroundColor: "black" }}
      >
        <Grid item sm={3}>
          <Logo />
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="center"
          className="textoFondoOscuro"
          px={{ sm: 50 }}
        >
          <Grid
            item
            sm={12}
          >
            <Box className="autos"></Box>
          </Grid>
          <Grid item sm={10} px={{ xs: 3, sm: 0 }}>
            <Typography variant="h3" className="titleColor title">
              Nuestro Objetivo
            </Typography>
            <Typography variant="h5" py={{ xs: 3, sm: 0 }}>
              Garantizar la seguridad interna y externa de nuestros clientes, de elementos que pudiesen afectar su integridad física, patrimonio e inversión.
            </Typography>
          </Grid>
          <Grid item sm={6} my={{ sm: 5 }} p={3}>
            <Typography variant="h4" className="titleColor" py={3}>NOSOTROS</Typography>
            <p className="parrafo">LIONS F-1 es una empresa legalmente constituida y acreditada en el país. Incursiona en esta actividad el año 1999, logrando destacarse en muy poco tiempo por su capacidad y eficiencia. Su plantel administrativo está conformado por un equipo de profesionales que durante el desarrollo de su labor se distinguieron en la especialidad de seguridad.</p>
            <p className="parrafo">LIONS F-1 es una empresa legalmente constituida y acreditada en el país. Incursiona en esta actividad el año 1999, logrando destacarse en muy poco tiempo por su capacidad y eficiencia. Su plantel administrativo está conformado por un equipo de profesionales que durante el desarrollo de su labor se distinguieron en la especialidad de seguridad.</p>
            <p className="parrafo">Actualmente contamos con oficinas y sucursales totalmente equipadas en las ciudades de La Paz, Oruro, Cochabamba y Sucre logrando que nuestro trabajo responsable sea el pilar fundamental para nuestro éxito.</p>
          </Grid>
          <Grid item sm={6} my={{ sm: 5 }} p={3}>
            <Typography variant="h4" className="titleColor" py={3}>PREGUNTAS FRECUENTES</Typography>
            <Typography variant="h6" className="titleColor" py={3}>¿Cuál es nuestra cobertura?</Typography>
            <p className="parrafo">Tenemos una cobertura a nivel nacional con una experiencia de más de 22 años .</p>
            <Typography variant="h6" className="titleColor" py={3}>¿ Nuestro personal esta capacitado?</Typography>
            <p className="parrafo">Tenemos un personal que es constantemente  capacitado en diferentes áreas de la seguridad física y electrónica.</p>
            <Typography variant="h6" className="titleColor" py={3}>Proveemos equipamiento electrónico?</Typography>
            <p className="parrafo">Brindamos la instalación de  circuito cerrado de cámaras para ser visto solo por el personal autorizado. Se personalizan para adaptarse a las necesidades de cada cliente ya sea para la seguridad, vigilancia</p>
          </Grid>
          <Grid item sm={10}>
            <Typography variant="h6" className="parrafo" mx={{ xs: 3, sm: 0 }}>Su tranquilidad es lo que más nos importa.  trabajamos día a día para mejorar el nivel de seguridad en las instalaciones de nuestros clientes y para ello, ofrecemos el servicio de vigilancia con los más estrictos estándares de calidad, adaptado al nivel de riesgo y a los requerimientos definidos en cada cliente.</Typography>
          </Grid>
          <Grid item sm={10} mx={{ xs: 3, sm: 0 }}>
            <Typography variant="h4" className="titleColor" py={3}>Modelo de Calidad</Typography>
            <Typography variant="h6" py={3}>Somos una empresa orientada a procesos, nuestro modelo de calidad representa la manera en que trabajamos:</Typography>
            <p>* Identificación de riesgos por medio de un análisis de vulnerabilidad </p>
            <p>* Pactamos compromisos con la clientela. </p>
            <p>* Establecemos procesos que nos permitan cumplir con los compromisos pactados. </p>
            <p>* Medimos los niveles de cumplimento del personal asignado. </p>
            <p>* Capacitamos a nuestro personal para el cumplimiento de sus actividades.</p>
            <Box className="boxNosotros">

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </SeguridadLayout>
  )
}
