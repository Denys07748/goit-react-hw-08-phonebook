import { Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const styleLink = {
  width: '100%',
  height: '100%',
};

const styleBtn = {
  p: 0,
  mr: 3,
  width: '120px',
  height: '35px',
};

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isLoggedIn ? (
        <Button variant="contained" sx={styleBtn}>
          <NavLink to="/contacts">
            <Typography variant="h7">Contacts</Typography>
          </NavLink>
        </Button>
      ) : (
        <>
          <Button variant="contained" sx={styleBtn}>
            <NavLink to="/register" style={styleLink}>
              <Typography variant="h7">Register</Typography>
            </NavLink>
          </Button>
          <Button variant="contained" sx={styleBtn}>
            <NavLink to="/login" style={styleLink}>
              <Typography variant="h7">Log In</Typography>
            </NavLink>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Home;
