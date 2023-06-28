import {
  Button, Grid, Link as MuiLink, TextField, Typography,
} from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <Container>
      <Grid container flexDirection="column" textAlign="center" spacing={2} maxWidth={300}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Typography variant="h7" color="text.secondary">SUA VEZ DE FAZER PARTE DISSO</Typography>
        </Grid>
        <Grid item>
          <TextField label="Nome" size="small" fullWidth />
        </Grid>
        <Grid item>
          <TextField label="Usuário" size="small" fullWidth />
        </Grid>
        <Grid item>
          <TextField label="Email" size="small" fullWidth />
        </Grid>
        <Grid item>
          <TextField label="Senha" size="small" fullWidth />
        </Grid>
        <Grid item>
          <TextField label="Digite sua senha novamente" size="small" fullWidth />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" fullWidth>CRIAR CONTA</Button>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary">
            <Link to="/register">
              <MuiLink variant="body2" sx={{ ml: 0.4 }}>Já tenho uma conta</MuiLink>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
