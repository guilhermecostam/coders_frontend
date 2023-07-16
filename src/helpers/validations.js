import { z } from 'zod';

export const authenticationUserFormSchema = z.object({
  identifier: z.string().nonempty('É obrigatório fornecer um usuário.'),
  password: z.string().min(6, 'Senha inválida'),
});
