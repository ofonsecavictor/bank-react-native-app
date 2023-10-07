import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  cpfCnpj: yup
    .string()
    .required('Campo obrigatório')
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
      // Verifique se é um CPF válido (11 dígitos) ou um CNPJ válido (14 dígitos)
      return /^[0-9]{11}$|^[0-9]{14}$/.test(value);
    }),
  password: yup.string().required('Campo obrigatório'),
});
