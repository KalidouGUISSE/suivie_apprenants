export const formatSuccess = (
  data: any,
  status: number = 200,
  message: string = "Succès"
) => {
  return {
    status,
    success: true,
    message,
    data,
  };
};

export const formatError = (
  status: number,
  message: string,
  errors: any = null
) => {
  return {
    status,
    success: false,
    message,
    errors,
  };
};
