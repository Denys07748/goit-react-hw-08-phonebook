import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const FormContainer = ({ children }) => {
  return (
    <Container
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(11, 9, 26, 0.808)',
        width: '350px',
        outline: '2px solid gray',
        borderRadius: '8px',
        padding: '15px',
      }}
    >
      {children}
    </Container>
  );
};

export default FormContainer;

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
