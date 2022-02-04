import * as Yup from 'yup';

export interface IInitialValues {
  username: string;
  password: string;
}

export const initialValues: IInitialValues = {
  username: 'Anna',
  password: 'pass123',
};

export const yupScheme = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});
