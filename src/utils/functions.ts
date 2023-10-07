export const formatCpfCnpj = (text: string) => {
  const cleanedText = text.replace(/[^\d]/g, '');
  if (cleanedText.length <= 11) {
    return cleanedText.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    return cleanedText.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
  }
};
