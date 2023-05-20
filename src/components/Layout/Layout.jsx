import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Container } from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
// import AppBar from 'components/AppBar/AppBar';
import Header from 'components/Header/Header';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '6rem' }}>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <ToastContainer autoClose={3000} theme="colored" />
      </Container>
    </>
  );
};

export default Layout;
