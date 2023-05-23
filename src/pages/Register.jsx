import { Box } from '@mui/material';
import FormContainer from 'components/FormContainer/FormContainer';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Box>
      <title>Registration</title>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </Box>
  );
};

export default Register;
