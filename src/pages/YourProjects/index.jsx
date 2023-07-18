import { Grid } from '@mui/material';
import ContainerAuth from 'containers/ContainerAuth';
import React from 'react';

import Projects from './components/Projects';

export default function YourProjects() {
  return (
    <ContainerAuth>
      <Grid item>
        <Projects />
      </Grid>
    </ContainerAuth>
  );
}
