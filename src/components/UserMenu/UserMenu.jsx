import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <Box component="span" m={2}>
        <p>Welcome, {user.name}</p>
      </Box>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  );
};

export default UserMenu;
