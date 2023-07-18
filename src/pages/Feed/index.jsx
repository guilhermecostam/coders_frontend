import { Divider, Grid } from '@mui/material';
import ContainerAuth from 'containers/ContainerAuth';
import React from 'react';

import Create from './components/Create';
import Projects from './components/Projects';

export default function Main() {
  return (
    <ContainerAuth>
      <Grid item>
        <Create />
        <Divider sx={{ margin: '3rem 0' }} />
        <Projects />
      </Grid>
    </ContainerAuth>
  );
}
