import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import { signIn } from 'src/services/requests';

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      identifier: event.target.elements.value,
      password: event.target.elements.value,
    };

    await signIn(userData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container flexDirection="column" textAlign="center" spacing={2} maxWidth={300}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">EI CODER, LOGUE AGORA!</Typography>
          </Grid>
          <Grid item>
            <TextField name="identifier" label="Email" type="text" size="small" fullWidth />
          </Grid>
          <Grid item>
            <TextField name="password" label="Senha" type="password" size="small" fullWidth />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" fullWidth>ENTRAR</Button>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary" marginBottom={0.4}>
              Crie uma conta
              <Link to="/register"> aqui</Link>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Perdeu sua senha?
              <Link to="/recover"> a gente te ajuda</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
