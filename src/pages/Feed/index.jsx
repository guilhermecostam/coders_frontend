import { Box } from '@mui/material';
import ContainerAuth from 'containers/ContainerAuth';
import React from 'react';
import SideMenu from 'src/components/SideMenu';

import Projects from './components/Projects';

export default function Main() {
  return (
    <ContainerAuth>
      <Box>
        <Projects />
      </Box>
      <Box>
        <SideMenu />
      </Box>
    </ContainerAuth>
  );
}
