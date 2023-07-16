import { LoadingButton } from '@mui/lab';
import {
  Grid, TextField, Typography,
} from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from 'src/services/requests';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name: event.target.elements.name.value,
      userName: event.target.elements.userName.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      confirmPassword: event.target.elements.confirmPassword.value,
    };

    const response = await register(formData);

    if (response.status === 200) {
      setLoading(false);
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
            <TextField name="name" label="Nome" type="text" size="small" fullWidth />
          </Grid>
          <Grid item>
            <TextField name="userName" label="Nome de usuário" type="text" size="small" fullWidth />
          </Grid>
          <Grid item>
            <TextField name="email" label="Email" type="text" size="small" fullWidth />
          </Grid>
          <Grid item>
            <TextField name="password" label="Senha" type="password" size="small" fullWidth helperText="Sua senha deve conter 8 caracteres, símbolos, números e letras maiúsculas" />
          </Grid>
          <Grid item>
            <TextField name="confirmPassword" label="Senha novamente" type="password" size="small" fullWidth helperText="Digite sua senha novamente" />
          </Grid>
          <Grid item>
            <LoadingButton type="submit" variant="contained" loading={loading} fullWidth>CRIAR CONTA</LoadingButton>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary" marginBottom={0.4}>
              Já tem uma conta?
              <Link to="/register"> Faça login</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
