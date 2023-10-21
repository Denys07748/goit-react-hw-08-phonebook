import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { container } from 'styles';

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
      <Container sx={container.main}>
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
