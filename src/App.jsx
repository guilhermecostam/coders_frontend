import { theme } from './theme';
import React from 'react';
import './assets/css/main.css';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>CODERS</h1>
    </ThemeProvider>
  );
}

export default App;
