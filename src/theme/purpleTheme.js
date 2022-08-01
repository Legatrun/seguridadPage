import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: 90
                }
            }
        }
    },
    palette: {
        primary:{
            main: '#000'
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