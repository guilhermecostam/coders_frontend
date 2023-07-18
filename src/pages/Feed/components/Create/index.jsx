import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { BigButton } from './styles';

export default function Create() {
  return (
    <Link to="/create-project">
      <Box maxWidth={600} textAlign="center" m="0 auto" mb={3}>
        <Typography color="text.secondary" variant="h6" component="h1">
          VOCÊ TEM UMA IDEIA E GOSTARIA DE ENCONTRAR PESSOAS PARA AJUDAR A DESENVOLVÊ-LA?
        </Typography>
      </Box>
      <BigButton variant="outlined" color="secondary">
        <Typography variant="body1" component="span">ANUNCIAR MEU PRÓPRIO PROJETO</Typography>
      </BigButton>
    </Link>
  );
}
