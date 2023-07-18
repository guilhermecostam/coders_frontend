import { z } from 'zod';

export const authenticationUserFormSchema = z.object({
  identifier: z.string().nonempty('É obrigatório fornecer um usuário.'),
  password: z.string().min(6, 'Senha inválida'),
});

export const createAccountFormSchema = z.object({
  name: z.string().nonempty('É obrigatório fornecer um nome.'),
  username: z.string().nonempty('É obrigatório fornecer um nome de usuário.'),
  email: z.string().nonempty('É obrigatório fornecer um email.').email('E-mail inválido.'),
  password: z.string().nonempty('Digite uma senha').min(6, 'Senha inválida.').regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'Uma letra maiúscula, um número e um caractere especial são o mínimo.',
  ),
  passwordConfirm: z.string().nonempty('Digite uma senha').refine((data) => data.password === data.confirm, {
    message: 'As senhas não coincidem.',
    path: ['confirm'],
  }),
});
