import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { container } from 'styles';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={container.userMenu}>
      <Box mr={2}>
        <NavLink to="/">
          <Typography variant="h6">Phonebook</Typography>
        </NavLink>
      </Box>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography variant="h7">Contacts</Typography>
        </NavLink>
      )}
    </Box>
  );
};
