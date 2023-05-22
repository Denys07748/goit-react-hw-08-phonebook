import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
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
      <>
        <Button
          variant="contained"
          sx={{ p: 0, mr: 3, width: '120px', height: '35px' }}
        >
          <NavLink to="/register" style={{ width: '100%', height: '100%' }}>
            <Typography variant="h7">Register</Typography>
          </NavLink>
        </Button>
        <Button
          variant="contained"
          sx={{ p: 0, width: '120px', height: '35px' }}
        >
          <NavLink to="/login" style={{ width: '100%', height: '100%' }}>
            <Typography variant="h7">Log In</Typography>
          </NavLink>
        </Button>
      </>
    </Container>
  );
};

export default Home;
