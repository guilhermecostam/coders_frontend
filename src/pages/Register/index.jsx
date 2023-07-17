import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import Logo from 'components/Logo';
import Container from 'containers/Container';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Toast from 'src/components/Toast';
import { createAccountFormSchema } from 'src/helpers/validations';
import { createAccountRequest } from 'src/services/requests';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createAccountFormSchema),
  });

  const registerForm = async (data) => {
    setLoading(true);

    const response = await createAccountRequest(data);

    if (response.status === 200) {
      setLoading(false);
      setAccountCreated(true);
    } else {
      setLoading(false);
      setOpen(true);
    }
  };

  return (
    <Container>
      <Toast message="Uma conta com essas credenciais já existe." severity="error" open={open} setOpen={setOpen} />
      {
          accountCreated ? (
            <Grid container flexDirection="column" textAlign="center" spacing={3} maxWidth={300}>
              <Grid item>
                <Logo />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Verifique o email que nos forneceu e confirme sua conta, depois disso, acesse a tela de login e insira seus dados.
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained">
                  <Link to="/login">IR PARA TELA DE LOGIN</Link>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <form onSubmit={handleSubmit(registerForm)}>
              <Grid container flexDirection="column" textAlign="center" spacing={1.5} maxWidth={400}>
                <Grid item xs={12}>
                  <Logo />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="text.secondary">CRIE SUA CONTA</Typography>
                </Grid>
                <Grid item>
                  <TextField {...register('name')} label="Nome" type="text" size="small" error={!!errors.name} helperText={errors.name && errors.name.message} fullWidth />
                </Grid>
                <Grid item>
                  <TextField {...register('username')} label="Usuário" type="text" size="small" error={!!errors.username} helperText={errors.username && errors.username.message} fullWidth />
                </Grid>
                <Grid item>
                  <TextField {...register('email')} label="Email" type="text" size="small" error={!!errors.email} helperText={errors.email && errors.email.message} fullWidth />
                </Grid>
                <Grid item>
                  <TextField {...register('password')} label="Senha" type="password" size="small" error={!!errors.password} helperText={errors.password && errors.password.message} fullWidth />
                </Grid>
                <Grid item>
                  <TextField {...register('passwordConfirm')} label="Repita a senha" type="password" size="small" error={!!errors.passwordConfirmation} helperText={errors.passwordConfirmation && errors.passwordConfirmation.message} fullWidth />
                </Grid>
                <Grid item>
                  <LoadingButton type="submit" variant="contained" loading={loading} fullWidth>ENTRAR</LoadingButton>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary" marginBottom={0.4}>
                    Já possui uma conta? Clique
                    <Link to="/login"> aqui</Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          )
        }
    </Container>
  );
}
