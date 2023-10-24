import { Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { button, container } from 'styles';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container sx={container.home}>
      {isLoggedIn ? (
        <Button variant="contained" sx={button.navBtn}>
          <NavLink to="/contacts">
            <Typography variant="h7">Contacts</Typography>
          </NavLink>
        </Button>
      ) : (
        <>
          <Button variant="contained" sx={button.navBtn}>
            <NavLink to="/register">
              <Typography variant="h7">Register</Typography>
            </NavLink>
          </Button>
          <Button variant="contained" sx={button.navBtn}>
            <NavLink to="/login">
              <Typography variant="h7">Log In</Typography>
            </NavLink>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Home;
