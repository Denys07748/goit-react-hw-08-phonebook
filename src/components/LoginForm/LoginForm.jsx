import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, FormLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { form } from 'styles';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form style={form.form}>
        <FormLabel htmlFor="email" sx={form.label}>
          Email
          <Field type="tel" name="email" style={form.input} />
          <ErrorMessage
            name="email"
            component="div"
            style={form.errorMessage}
          />
        </FormLabel>
        <FormLabel htmlFor="password" sx={form.label}>
          Password
          <Field type="password" name="password" style={form.input} />
          <ErrorMessage
            name="password"
            component="div"
            style={form.errorMessage}
          />
        </FormLabel>
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
