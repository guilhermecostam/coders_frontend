import { Grid } from '@mui/material';
import Nav from 'components/Nav';
import React from 'react';

export default function ContainerAuth({ children }) {
  return (
    <Grid container width="100%" maxWidth="1240px" height="100vh" justifyContent="center" alignItems="center" sx={{ p: '6rem 2.5rem', m: '0 auto' }}>
      <Nav />
      {children}
    </Grid>
  );
}
