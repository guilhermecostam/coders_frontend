import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Grid, TextField, Typography } from '@mui/material';
import Logo from 'components/Logo';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Toast from 'src/components/Toast';
import ContainerAuth from 'src/containers/ContainerAuth';
import { setSessionToken } from 'src/helpers/session';
import { createProjectFormSchema } from 'src/helpers/validations';
import { createProjectRequest } from 'src/services/requests';

export default function createProject() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createProjectFormSchema),
  });

  const handleForm = async (data) => {
    setLoading(true);

    const response = await createProjectRequest(data);

    if (response.status === 200) {
      setLoading(false);
      setSessionToken(response.data.token);
      navigate('/feed');
    } else {
      setLoading(false);
      setMessage('Usuário ou senha incorretos.');
      setOpen(true);
    }
  };

  return (
    <ContainerAuth>
      <Toast message={message} severity="error" open={open} setOpen={setOpen} />
      <form onSubmit={handleSubmit(handleForm)}>
        <Grid container flexDirection="column" textAlign="center" spacing={2} maxWidth={400}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">CRIE SEU PROJETO,</Typography>
            <Typography variant="h6" color="text.secondary">NOS CONTE MAIS SOBRE SUA IDEIA</Typography>
          </Grid>
          <Grid item>
            <TextField {...register('name')} label="Nome" type="text" size="small" error={!!errors.identifier} helperText={errors.identifier && errors.identifier.message} fullWidth />
          </Grid>
          <Grid item>
            <TextField {...register('description')} label="Descrição" type="text" size="small" error={!!errors.description} helperText={errors.description && errors.description.message} fullWidth />
          </Grid>
          <Grid item>
            <TextField {...register('githubUrl')} label="Link do repositório do projeto" type="text" size="small" error={!!errors.githubUrl} helperText={errors.githubUrl && errors.githubUrl.message} fullWidth />
          </Grid>
          <Grid item>
            <TextField {...register('discordUrl')} label="Link do servidor do discord" type="text" size="small" error={!!errors.discordUrl} helperText={errors.discordUrl && errors.discordUrl.message} fullWidth />
          </Grid>
          <Grid item>
            <LoadingButton type="submit" variant="contained" loading={loading} fullWidth>CRIAR PROJETO</LoadingButton>
          </Grid>
        </Grid>
      </form>
    </ContainerAuth>
  );
}
