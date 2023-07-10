import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#7D14C3',
      main: '#620C9B',
      dark: '#43056C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#4BF0DC',
      main: '#28E0CA',
      dark: '#20B4A2',
      contrastText: '#FFFFFF',
    },
    grey: {
      400: '#BDBDBD',
    },
    gradient: {
      main: 'linear-gradient(90deg, #620C9B, #28E0CA)',
    },
    transparent: {
      main: 'rgba(0, 0, 0, 1)',
    },
    shadow: {
      main: '0 4px 4px rgba(0, 0, 0, 0.40)',
    },
  },
});
