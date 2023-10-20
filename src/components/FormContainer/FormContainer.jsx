import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { container } from 'styles';

const FormContainer = ({ children }) => {
  return <Container sx={container.form}>{children}</Container>;
};

export default FormContainer;

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
