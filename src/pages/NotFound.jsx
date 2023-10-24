import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import notFoundImage from 'images/not_found_image.png';
import { button, container } from 'styles';

const NotFound = () => {
  return (
    <Container sx={container.notFoundPage}>
      <img src={notFoundImage} alt="Not found page" />
      <NavLink to="/" style={button.backHomeLink}>
        BACK TO HOME
      </NavLink>
    </Container>
  );
};

export default NotFound;
