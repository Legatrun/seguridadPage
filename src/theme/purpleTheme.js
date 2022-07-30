import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: 90,
                    minHeight: 90
                }
            }
        }
    },
    palette: {
        primary:{
            main: '#272727'
        },
        secondary:{
            main: '#353535'
        },
        error:{
            main: red.A400
        },
        action:{
            main: '#fff'
        }
    }
})