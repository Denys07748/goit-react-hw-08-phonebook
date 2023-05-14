import { FormEl } from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(checkName, messageName)
//     .required('Name is required'),
//   number: yup
//     .string()
//     .matches(checkNum, messageNum)
//     .required('Number is required'),
// });

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  //   const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    // dispatch((values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <label htmlFor="name">
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
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
        <button type="submit">Register</button>
      </FormEl>
    </Formik>
  );
};

export default RegisterForm;
