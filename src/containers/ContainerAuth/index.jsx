import { Grid } from '@mui/material';
import React from 'react';
import SideMenu from 'src/components/SideMenu';

export default function ContainerAuth({ children }) {
  return (
    <Grid container width="100%" maxWidth="1240px" height="fit-content" justifyContent="center" alignItems="center" sx={{ p: '6rem 2.5rem', m: '0 auto 8rem auto' }}>
      <SideMenu />
      {children}
    </Grid>
  );
}
