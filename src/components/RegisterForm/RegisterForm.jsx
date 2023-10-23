import { Button, FormLabel } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { form } from 'styles';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form style={form.form}>
        <FormLabel htmlFor="name" sx={form.label}>
          Username
          <Field type="text" name="name" style={form.input} />
          <ErrorMessage name="name" component="div" style={form.errorMessage} />
        </FormLabel>
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
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
