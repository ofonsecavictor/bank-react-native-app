import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  cpfCnpj: yup
    .string()
    .required('Campo obrigatório')
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
      return /^[0-9]{11}$|^[0-9]{14}$/.test(value);
    }),
  password: yup.string().required('Campo obrigatório'),
});
