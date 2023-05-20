// import Button from '@mui/material/Button';
import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { Header } from './Header.styled';
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
// import MenuIcon from '@mui/icons-material';

// const useStyles = makeStyles(theme);

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Navigation />
          </Box>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
