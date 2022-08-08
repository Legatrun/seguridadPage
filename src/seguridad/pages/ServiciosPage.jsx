import { SeguridadLayout } from "../layout/SeguridadLayout";
import { Grid, Typography } from "@mui/material";
import { Logo } from "../components";
import { Box } from "@mui/system";
import { LabelImportant } from "@mui/icons-material";


export const ServiciosPage = () => {
  return (
    <SeguridadLayout>
      <Grid
        color="white"
        container
        justifyContent="center"
        className="serviciosContainer"
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
          px={{ sm: 40 }}
        >
          <Grid item sm={12} my={{ xs: 0, sm: 10 }} >
            <Box className="autosServicio"></Box>
          </Grid>
          <Grid item sm={6} px={{ xs: 3, sm: 3 }}>
            <Typography variant="h4">Por qué <span className="titleColor">elejirnos</span></Typography>
            <Typography variant="subtitle1"><LabelImportant /> Nosotros capacitamos al personal en nuestra aula de instrucción  y en sus instalaciones, definiendo las funciones específicas de la instalación que resguardan.</Typography>
            <Typography variant="subtitle1"><LabelImportant />  Nosotros no trabajamos con plantillas, elaboramos  planes  de seguridad integral de  acuerdo a las necesidades de sus instalaciones.</Typography>
            <Typography variant="subtitle1"><LabelImportant />  Nosotros tratamos a nuestro personal con respeto y nos debemos a él, pero nuestro profesionalismo no se basa únicamente en el recurso humano, sino en la suma de gestiones enfocadas en la atención al cliente.</Typography>
            <Typography variant="subtitle1"><LabelImportant />  Nosotros brindamos un servicio personalizado y que se ajusta a sus necesidades.</Typography>
            <Typography variant="subtitle1"><LabelImportant />  Nosotros deseamos que nuestros clientes nos  consideren como  “SOCIOS ESTRATEGICOS”  y  no como un proveedor más.</Typography>
            <Typography variant="subtitle1"><LabelImportant />  Nosotros realizamos cursos y seminarios a la medida de las necesidades de su empresa, planificando la mejora continua sostenible.</Typography>
          </Grid>
          <Grid item sm={6} my={{ xs: 10, sm: 0 }} px={{ xs: 3, sm: 3 }}>
            <Box className="boxServicio" />
            <Typography variant="h3" py={{ xs: 3, sm: 5 }}>Seguridad  <span className="titleColor">física</span></Typography>
            <p className="parrafo">
              Se conoce como seguridad física al conjunto de elementos que conforman un plan de seguridad, para proteger un espacio determinado con el fin de evitar daños y minimizar amenazas. Para prestar un buen servicio de seguridad es necesario identificar los posibles riesgos y amenazas que hay en el lugar y buscar los elementos físicos que se requieran para suministrar una excelente protección.
              <br />
              Las amenazas que se pueden bloquear con los elementos de la seguridad física, son los incendios, robos, secuestros, homicidios, suplantación y robo de información, que se analizan y designan según la probabilidad de amenaza (altamente probable, probable, poco probable y probabilidad desconocida).
            </p>
          </Grid>
          <Grid container justifyContent="center" px={{ xs: 3, sm: 3 }}>
            <Grid item sm={10}>
              <Typography variant="h3" py={{ xs: 3, sm: 2 }}><span className="titleColor">Elementos </span>de la seguridad física</Typography>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Sistema de alarma: </Typography>
              <p className="parrafo">
                es un aplicativo que envía información de alerta a las autoridades o activa una sirena para irrumpir en la tranquilidad del espacio y poner en estado de emergencia el lugar.
                <br />
                Una alarma por sí sola no evita una situación de hurto, lo que realmente hace es crear una alerta, algunas lo hacen solo por medio del sonido, mientras otras suenan y envían mensajes o llamadas automáticamente a los números de teléfono que estén configurados.
                <br />
                Las sistemas de alarmas funcionan con sensores de movimiento, gas, humo y agua, que activan y envían la alerta. Este es un elemento indispensable para tener una óptima seguridad física. Aunque también pueden activarse por medio de un botón de pánico que se ubica en un lugar clave del establecimiento.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Control de acceso:</Typography>
              <p className="parrafo">
                Es el mecanismo que permite identificar a una persona por medio de una clave o un lector biométrico, que pasa por tres pasos (autenticación, autorización y trazabilidad) para poder acceder al lugar o a la información que se requiera, según sea el caso. Aunque este control no en todos los casos es electrónicamente, ya que en los edificios residenciales los guardias de seguridad ya conocen la persona que reside en el lugar y los dejan pasar sin un control de acceso.
                <br />
                En una empresa este elemento restringe el paso del personal en diferentes horarios, por ejemplo, los trabajadores no pueden acceder a las instalaciones en cierto horario y el control de acceso se encarga de negar la entrada. Por otro lado, este elemento envía información de la persona y la hora en la que hizo el acceso, lo que ayuda a tener un mayor control por medio de una base de datos.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Barreras perimetrales:</Typography>
              <p className="parrafo">
                Son barreras físicas como las vallas de contencion, mallas y cercas, que son las que determinan la frontera entre predios y define la propiedad privada. En seguridad estos elementos son requeridos para retrasar el ingreso de personas inescrupulosas o en el caso de un atentado reaccionar más rápido, porque las barreras retrasan la intromisión de los delincuentes, mientras los vigilantes alertan a la policía.
                <br />
                Estas barreras, son el anillo más lejano del punto seguro, es decir, desde esta barrera empieza a construirse y ensamblarse todos los sistemas de seguridad. Estas barreras son las más importantes del sistema de seguridad física porque son las que cobijan el lugar y las que evitarán la entrada de personas externas sin identificarse debidamente.
              </p>
            </Grid>


            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Circuito cerrado de televisión (CCTV): </Typography>
              <p className="parrafo">
                Es un sistema de videovigilancia, que permite observar todo un espacio por medio de cámaras de seguridad enlazadas y conectadas a pantallas de transmisión. Usualmente las pantallas de transmisión se agrupan en un cuarto donde hay personal de seguridad que se encarga de vigilar lo que sucede en el entorno, sin necesidad de estar fuera.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Detectores de incendio:</Typography>
              <p className="parrafo">
                Es una alarma que identifica la presencia de humo en el ambiente y reconoce los componentes extraños en el lugar. Existen dos clases de detectores, uno es el gestor de iones que se encarga de detectar gases tóxicos y sustancias en el ambiente, que no son visibles, los otros son los detectores ópticos, que detectan humo más pesado y que es visible.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Detectores de incendio:</Typography>
              <p className="parrafo">
                Son las personas uniformadas que proyectan seguridad y monitorizan todos los elementos nombrados anteriormente. Son la cara de la seguridad privada.
                <br />
                Las mejores empresas de seguridad privada toman todos los elementos y los organizan en un plan de seguridad, para así cubrir los establecimientos a los que va a prestar seguridad en un 100% y evitar cualquier tipo de hurto o atentado
              </p>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" px={{ xs: 3, sm: 3 }}>
            <Grid item sm={10}>
              <Typography variant="h3" py={{ xs: 3, sm: 2 }}><span className="titleColor">TiOC </span>la nueva cámara tres en uno de Dahua Technology</Typography>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Alarma precisa</Typography>
              <p className="parrafo">
                Con la protección perimetral impulsada por Inteligencia Artificial y SMD Plus, Dahua TiOC ofrece una función de alarma precisa al detectar personas y vehículos. Mientras, filtra objetos que no son el objetivo, como animales, hojas y faros de automóviles. Mantiene la tasa de falsas alarmas por debajo del dos por ciento, y sus potentes algoritmos de Inteligencia Artificial también ofrecen una detección de movimiento más rápida, precisa y de mayor alcance (la distancia de detección aumenta en más del 185%), lo que mejora considerablemente la eficiencia de la solución.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Disuasión activa</Typography>
              <p className="parrafo">
                TiOC hace posible responder durante el evento con sus funciones de disuasión activa y alarma en tiempo real, las cuales pueden evitar significativamente que suceda dicho evento. La disuasión activa es más eficaz con luz roja y azul, que es más llamativa que la blanca, y también es visible incluso en niebla densa y lluvia intensa. Un altavoz mejorado ofrece hasta 110 decibelios, con un sonido de sirena o una voz grabada.
                <br />
                <br />
                La app Alarm Push proporciona notificaciones de alarma en tiempo real, lo que permite a los usuarios responder a tiempo, como enviar una alarma de voz mediante la función de conversación bidireccional.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Full color</Typography>
              <p className="parrafo">
                Con la tecnología full color, Dahua TiOC ofrece imágenes en color de día y de noche, lo que mejora considerablemente la capacidad de identificar sospechosos, al tiempo que aumenta la calidad de las pruebas de vídeo.
                <br />
                <br />
                TiOC integra monitoreo a todo color 24 horas, disuasión activa e Inteligencia Artificial en una solución inteligente e innovadora, lo que ahorra mucho tiempo y costes para los distribuidores e instaladores.
              </p>
            </Grid>
            <Grid item sm={6} px={{ sm: 4 }}>
              <Typography variant="h5" py={{ xs: 1, sm: 2 }}>Escenarios de aplicación</Typography>
              <p className="parrafo">
                TiOC es adecuada para lugares privados que necesitan mantener el orden y advertir a los intrusos, como villas, tiendas, almacenes, etc. Puede identificar con precisión objetivos reales con una alarma precisa, advertirlos de manera efectiva con disuasión activa y notificar al usuario con datos reales.
                La imagen a todo color que registra la cámara proporciona una videncia humana o vehicular más útil para futuras verificaciones y análisis, ofreciendo una protección mejorada a los residentes, propietarios de tiendas y gerentes de almacén.
                <br />
                <br />
                La cámara, con la función de disuasión activa, ayudará a bajar el riesgo de ocupación ilegal, ya que el propietario recibirá una alerta desde su smartphone bajo cualquier anomalía reflejada por las reglas establecidas previamente. Permite avisar a las autoridades para desalojar aquellos ciudadanos que han ocupado una vivienda de manera ilegal, sin necesitad de un orden judicial dentro de esas 24 horas. Además, como valor añadido, en la vivienda habrá una alarma que puede espantar al intruso antes del acceso. En el caso del acceso a la casa, quedará grabado como evidencia para saber que la ocupación ha ocurrido en menos de 24 horas.
                <br />
                <br />
                TiOC también es ideal para escenarios al aire libre, como carriles de emergencia. Ofrece monitoreo a todo color las 24 horas, disuasión activa e Inteligencia Artificial con cámaras IP WizSense, cámaras HDCVI 6.0 y XVR y las próximas cámaras PTZ. Por tanto, es aplicable, como se ha señalado anteriormente, a villas, tiendas, almacenes, etc.
              </p>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </SeguridadLayout>
  )
}
