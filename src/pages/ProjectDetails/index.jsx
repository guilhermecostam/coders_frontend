import {
  Grid,
} from '@mui/material';
import React from 'react';
import ContainerAuth from 'src/containers/ContainerAuth';

import ProjectIndividual from './components/ProjectIndividual';

function ProjectDetails() {
  return (
    <ContainerAuth>
      <Grid item>
        <ProjectIndividual />
      </Grid>
    </ContainerAuth>
  );
}

export default ProjectDetails;
