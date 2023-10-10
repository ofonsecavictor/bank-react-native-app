import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  cpfCnpj: yup
    .string()
    .required('Campo obrigatório')
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
      return /^[0-9]{11}$|^[0-9]{14}$/.test(value);
    }),
  password: yup
    .string()
    .required('Campo obrigatório')
    .test(
      'valid-password',
      'A senha deve conter exatamente 8 números',
      value => {
        return /^\d{8}$/.test(value);
      },
    ),
});

export const validationPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});
