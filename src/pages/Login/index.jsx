import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Grid, TextField, Typography } from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Toast from 'src/components/Toast';
import { setSessionName, setSessionToken } from 'src/helpers/session';
import { authenticationUserFormSchema } from 'src/helpers/validations';
import { loginRequest } from 'src/services/requests';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authenticationUserFormSchema),
  });

  const handleForm = async (data) => {
    setLoading(true);

    const response = await loginRequest(data);

    if (response.status === 200) {
      setLoading(false);
      setSessionToken(response.data.token);
      setSessionName(data.identifier);
      // navigate('/feed');
      // window.location.reload();
    } else {
      setLoading(false);
      setMessage('Usuário ou senha incorretos.');
      setOpen(true);
    }
  };

  return (
    <Container>
      <Toast message={message} severity="error" open={open} setOpen={setOpen} />
      <form onSubmit={handleSubmit(handleForm)}>
        <Grid container flexDirection="column" textAlign="center" spacing={2} maxWidth={400}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">EI CODER, LOGUE AGORA!</Typography>
          </Grid>
          <Grid item>
            <TextField {...register('identifier')} label="Usuário" type="text" size="small" error={!!errors.identifier} helperText={errors.identifier && errors.identifier.message} fullWidth />
          </Grid>
          <Grid item>
            <TextField {...register('password')} label="Senha" type="password" size="small" error={!!errors.password} helperText={errors.password && errors.password.message} fullWidth />
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
