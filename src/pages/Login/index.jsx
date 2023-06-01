import {
  Button, Grid, Link as MuiLink, TextField, Typography,
} from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container>
      <Grid container flexDirection="column" textAlign="center" spacing={2} maxWidth={300}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Typography variant="h6" color="text.secondary">EI CODER, LOGUE AGORA!</Typography>
        </Grid>
        <Grid item>
          <TextField label="Email ou usuário" size="small" fullWidth />
        </Grid>
        <Grid item>
          <TextField label="Senha" size="small" fullWidth />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" fullWidth>ENTRAR</Button>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary" marginBottom={0.4}>
            Crie uma conta
            <Link to="/register">
              <MuiLink variant="body2" color="text.link" sx={{ ml: 0.4 }}>aqui</MuiLink>
            </Link>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Perdeu sua senha?
            <Link to="/recover">
              <MuiLink variant="body2" color="text.link" sx={{ ml: 0.4 }}>a gente te ajuda</MuiLink>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
