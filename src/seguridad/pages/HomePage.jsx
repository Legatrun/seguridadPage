import { Grid } from "@mui/material";
import { Logo } from "../components";
import { SeguridadLayout } from "../layout/SeguridadLayout";

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
        <Logo />
        <Grid item sm={9}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque iusto culpa maxime dolorem dolore doloribus quis nesciunt temporibus blanditiis animi fugit, quaerat explicabo doloremque, ratione odio ea nam pariatur!
            Nulla id voluptate libero tenetur natus? Numquam similique iusto quasi suscipit expedita, ut tempora beatae culpa. Adipisci ad, facere facilis et dolor quo voluptas! Voluptatum, tempora! Vel deleniti quam nemo!
            Deserunt ex repudiandae dolores perferendis libero reprehenderit? Natus est minus eum voluptatem quod pariatur laudantium alias fugiat temporibus facere enim culpa incidunt, sit quaerat vitae suscipit quidem ad similique ducimus.
            Ut molestiae sunt beatae quas sequi mollitia minima exercitationem ea ratione totam, quod iure quia quibusdam id. Ea et labore molestias totam dolorum corrupti architecto consequatur, expedita numquam libero fugit.
            Dignissimos, aliquam facilis. Unde corrupti quisquam eius sapiente voluptatibus hic, ad sint porro, rerum non aut? Suscipit reiciendis architecto aliquid corporis explicabo, quis laudantium at perferendis nemo, cumque tenetur enim?
            Atque nulla quidem ducimus reiciendis officia adipisci delectus alias, tempore asperiores iste voluptate, nisi aut? Porro vitae necessitatibus inventore, voluptates, tempora facilis esse deserunt odio, quae corporis error quis incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque iusto culpa maxime dolorem dolore doloribus quis nesciunt temporibus blanditiis animi fugit, quaerat explicabo doloremque, ratione odio ea nam pariatur!
            Nulla id voluptate libero tenetur natus? Numquam similique iusto quasi suscipit expedita, ut tempora beatae culpa. Adipisci ad, facere facilis et dolor quo voluptas! Voluptatum, tempora! Vel deleniti quam nemo!
            Deserunt ex repudiandae dolores perferendis libero reprehenderit? Natus est minus eum voluptatem quod pariatur laudantium alias fugiat temporibus facere enim culpa incidunt, sit quaerat vitae suscipit quidem ad similique ducimus.
            Ut molestiae sunt beatae quas sequi mollitia minima exercitationem ea ratione totam, quod iure quia quibusdam id. Ea et labore molestias totam dolorum corrupti architecto consequatur, expedita numquam libero fugit.
            Dignissimos, aliquam facilis. Unde corrupti quisquam eius sapiente voluptatibus hic, ad sint porro, rerum non aut? Suscipit reiciendis architecto aliquid corporis explicabo, quis laudantium at perferendis nemo, cumque tenetur enim?
            Atque nulla quidem ducimus reiciendis officia adipisci delectus alias, tempore asperiores iste voluptate, nisi aut? Porro vitae necessitatibus inventore, voluptates, tempora facilis esse deserunt odio, quae corporis error quis incidunthola.</p>
        </Grid>
      </Grid>
    </SeguridadLayout>
  );
};
