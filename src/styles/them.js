import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#193617',
        primary: '#193617',
        secondary: '#006241',
        white: '#ffffff',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        dark: '#000000',
      },
      primary: {
        main: "#193617",
      },
      secondary: {
        main: '#006241',
      },
      error: {
        main:'#ffffff',
      },
    },
  });