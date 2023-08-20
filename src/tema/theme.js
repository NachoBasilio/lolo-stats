import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4796E0',
    },
    secondary: {
      main: '#4371F7',
    },
    thertary: {
        main: '#43D0F7',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;