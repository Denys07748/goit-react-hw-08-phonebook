import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Box component="span" m={2}>
        <NavLink to="/register">Register</NavLink>
      </Box>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
