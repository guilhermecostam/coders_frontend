import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  identifier: yup.string().min(3),
  password: yup.string().min(8),
});
