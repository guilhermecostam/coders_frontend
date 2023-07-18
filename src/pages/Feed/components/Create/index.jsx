import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { BigButton } from './styles';

export default function Create() {
  return (
    <Link to="/create-project">
      <BigButton variant="outlined">
        <Typography variant="body1" component="span">ANUNCIAR MEU PRÓPRIO PROJETO</Typography>
      </BigButton>
    </Link>
  );
}
