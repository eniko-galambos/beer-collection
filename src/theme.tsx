import { deepPurple, lime } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple['A400'],
    },
    secondary: {
      main: lime[500],
    },
  },
});

export default theme;