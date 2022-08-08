import { Box, Grid, Typography } from "@mui/material";
import { Logo } from "../components";
import { SeguridadLayout } from "../layout/SeguridadLayout";
import { CrisisAlert, Visibility, AddTask, AssistantPhoto, AssuredWorkload, AutoGraph, Balance } from "@mui/icons-material";


export const HomePage = () => {
  return (
    <SeguridadLayout>
      <Grid
        color="white"
        container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="home"
        sx={{ backgroundColor: "black" }}
      >
        <Grid item sm={3}>
          <Logo />
        </Grid>
        <Grid
          container
          justifyContent="center"
          className="textoFondoOscuro"
        >
          <Grid
            item
            sm={6}
          >
            <Box className="homePage">

            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            className="title"
            my={5}
          >
            <Typography variant="h4">
              LIONS F1 <span className="titleColor">EMPRESA DE SEGURIDAD</span>
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            px={{ xs: 5, sm: 60 }}
          >
            <p>LION´S F-1 es una empresa legalmente constituida y acreditada en el país. Incursiona en esta actividad el año 1999, logrando destacarse en muy poco tiempo por su capacidad y eficiencia. Su plantel administrativo está conformado por un equipo de profesionales que durante el desarrollo de su labor se distinguieron en la especialidad de seguridad.
              La disciplina, responsabilidad y profesionalismo hacen que LION´S F-1 se constituya como una empresa líder en su rubro, y gracias a este compromiso de trabajo mantenemos una importante cartera de clientes en el ámbito nacional.
              Actualmente contamos con oficinas y sucursales totalmente equipadas en las ciudades de La Paz, Oruro, Cochabamba y Sucre logrando que nuestro trabajo responsable sea el pilar fundamental para nuestro éxito.
            </p>
          </Grid>
          <Grid
            container
            my={4}
            px={{ xs: 0, sm: 60 }}
          >
            <Grid item xs={1}>
              <CrisisAlert fontSize="large" />
            </Grid>
            <Grid item xs={11} sm={5} p={{ xs: 2 }}>
              <h1 className="titleColor">Misión</h1>
              <p>Otorgar seguridad y tranquilidad a nuestros clientes, portegiendo sus bienes y patrimonio a través de la vigilancia física y/o electrónica  mediante la capacitación  constante a nuestro personal  y el equipamiento de tecnología de vanguardia.</p>
            </Grid>

            <Grid item xs={1}>
              <Visibility fontSize="large" />
            </Grid>
            <Grid item xs={11} sm={5} p={{ xs: 2 }}>
              <h1 className="titleColor">Visión</h1>
              <p>Ser líderes en el mercado de la prestación de servicios de seguridad fisica y/o electrónica de vanguardia a tráves del fortalecimiento de la plataforma de la empresa, con recursos humanos altamente competitivos  que garanticen los beneficios de una vida tranquila.</p>
            </Grid>

            <Grid item xs={1}>
              <AssistantPhoto fontSize="large" />
            </Grid>
            <Grid item xs={11} sm={5} p={{ xs: 2 }}>
              <h1 className="titleColor">Responsabilidad</h1>
              <p>Ofrecemos respuestas precisas ante las circunstancias que nos rodean aplicando nuestra experiencia al servicio. Actuamos de manera consciente lo que nos permite reflexionar, administrar, orientar y valorar las consecuencias de nuestros actos, siempre en un plano moral y profesional.</p>
            </Grid>

            <Grid item xs={1}>
              <AssuredWorkload fontSize="large" />
            </Grid>
            <Grid item xs={11} sm={5} p={{ xs: 2 }}>
              <h1 className="titleColor">Profesionalismo</h1>
              <p>Nos regimos por las normas preestablecidas del respeto, la mesura, la objetividad y la efectividad en la actividad que desempeñamos.</p>
            </Grid>

            <Grid item xs={1}>
              <AutoGraph fontSize="large" />
            </Grid>
            <Grid item xs={11} sm={5} p={{ xs: 2 }}>
              <h1 className="titleColor">Honestidad</h1>
              <p>Nuestro respeto a la verdad brinda y refleja nuestra calidad en el servicio, asegura el bienestar y la confianza de nuestros clientes.</p>
            </Grid>

            <Grid item xs={1}>
              <Balance fontSize="large" />
            </Grid>
            <Grid item xs={11} sm={5} p={{ xs: 2 }}>
              <h1 className="titleColor">Lealtad</h1>
              <p>Cumplimos con nuestros compromisos en la ejecución de nuestros servicios de seguridad privada aún frente a circunstancias cambiantes o adversas para garantizar su seguridad.</p>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </SeguridadLayout >
  );
};
