import FormContainer from 'components/FormContainer/FormContainer';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from '@mui/material';

const Login = () => {
  return (
    <Container pt={10}>
      <title>Login</title>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Container>
  );
};

export default Login;
