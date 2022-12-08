interface IError {
  status?: number;
  message?: string;
}

export const createError = (status: number, message: string): any => {
  const err = new Error() as IError;
  err.status = status;
  err.message = message;
  return err;
};
