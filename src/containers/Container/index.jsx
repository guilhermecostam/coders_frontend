import { Grid } from '@mui/material';
import React from 'react';

export default function Container({ children }) {
  return (
    <Grid container width="100%" maxWidth="1240px" height="100vh" justifyContent="center" alignItems="center" sx={{ p: '0 2.5rem', m: '0 auto 8rem auto' }}>{ children }</Grid>
  );
}
