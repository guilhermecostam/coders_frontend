import { LoadingButton } from '@mui/lab';
import {
  Grid, TextField, Typography,
} from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setSessionToken } from 'src/helpers/session';
import { signIn } from 'src/services/requests';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const userData = {
      identifier: event.target.elements.identifier.value,
      password: event.target.elements.password.value,
    };

    const response = await signIn(userData);

    if (response.status === 200) {
      setLoading(false);
      setSessionToken(response.data.token);
    } else {
      setLoading(false);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    }
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
            <TextField name="identifier" label="Email" type="text" size="small" error={error} helperText={error && 'Usuário inválido'} fullWidth />
          </Grid>
          <Grid item>
            <TextField name="password" label="Senha" type="password" size="small" error={error} helperText={error && 'Senha inválida'} fullWidth />
          </Grid>
          <Grid item>
            <LoadingButton type="submit" variant="contained" loading={loading} fullWidth>ENTRAR</LoadingButton>
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
