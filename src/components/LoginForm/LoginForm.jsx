import { FormEl } from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/contacts/selectors';
import { logIn } from 'redux/auth/operations';

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
  //   const contacts = useSelector(selectContacts);

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
      <FormEl>
        <label htmlFor="email">
          Email
          <Field type="tel" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="tel" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Log In</button>
      </FormEl>
    </Formik>
  );
};

export default LoginForm;
