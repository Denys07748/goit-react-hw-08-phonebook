import { Avatar, Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import AddContact from 'components/AddContact/AddContact';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 1 }}>
        <AddContact />
      </Box>
      <Avatar sx={{ width: 30, height: 30, mr: 2 }}>{user.name[0]}</Avatar>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{ width: 60, height: 24 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
