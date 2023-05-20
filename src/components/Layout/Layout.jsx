import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
// import AppBar from 'components/AppBar/AppBar';
import Header from 'components/Header/Header';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import bgImage from 'images/bg_img.jpg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Container
        sx={{
          mt: '5rem',
          background: 'rgba(255, 255, 255, 0.2)',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
        }}
      >
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <ToastContainer autoClose={3000} theme="colored" />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
