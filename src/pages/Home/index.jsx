import { GitHub } from '@mui/icons-material';
import { Box } from '@mui/material';
import Container from 'containers/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'src/components/Logo';

import {
  Bar, CTA, H1, H2, Main,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
        <Main>
          <Bar />
          <H1>CODERS</H1>
          <H2>Agregue experiência à sua mente e venha codar seu futuro</H2>

          <Link to="/login">
            <CTA>QUERO FAZER PARTE</CTA>
          </Link>

          <Box mt={4} display="flex" gap={1.5}>
            <Link to="https://github.com/guilhermecostam/coders_frontend" target="_blank">
              <GitHub color="primary" width={32} height={32} />
            </Link>

            <Link to="https://github.com/guilhermecostam/coders_backend" target="_blank">
              <GitHub color="primary" width={32} height={32} />
            </Link>
          </Box>
        </Main>

        <Logo width="100%" style={{ maxWidth: 512 }} />
      </Box>
    </Container>
  );
}
