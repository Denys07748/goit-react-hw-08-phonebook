import { fetchContacts } from 'redux/contacts/operations';
// import { Container, TitleMain, TitleSec } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ pt: 2 }}>
      <div>{isLoading && !error && 'Request in progress...'}</div>
      <ContactList />
    </Box>
  );
};

export default Contacts;
