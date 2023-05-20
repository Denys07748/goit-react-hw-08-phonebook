import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar, Box, Container, Toolbar } from '@mui/material';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Navigation />
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
