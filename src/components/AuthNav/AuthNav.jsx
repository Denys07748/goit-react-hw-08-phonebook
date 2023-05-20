import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box>
      <Box component="span" mr={1}>
        <NavLink to="/register">Register</NavLink>
      </Box>
      <NavLink to="/login">Log In</NavLink>
    </Box>
  );
};

export default AuthNav;
