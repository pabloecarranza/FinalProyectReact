import {createTheme } from '@mui/material'
import { lightBlue, blueGrey } from '@mui/material/colors'


const primaryColor = lightBlue[500]
const secondaryColor = blueGrey[400]

const customTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },

    }
})

export default customTheme