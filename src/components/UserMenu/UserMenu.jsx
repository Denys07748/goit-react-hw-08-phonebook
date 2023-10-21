import { Avatar, Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { button, container, icon } from 'styles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={container.userMenu}>
      <Avatar sx={icon.avatar}>{user.name[0]}</Avatar>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
        sx={button.logout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
