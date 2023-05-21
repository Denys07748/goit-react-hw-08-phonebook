import { ContactsList } from './ContactList.styled';
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from '@mui/material';
// import ContactListItem from './ContactListItem';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.length === 0 ? (
        <p>
          There are no contacts in your phone book yet. Please add contacts.
        </p>
      ) : (
        <>
          <Filter />
          {visibleContacts.length === 0 ? (
            <p>Сontacts not found</p>
          ) : (
            <TableContainer
              component={Paper}
              // sx={{ background: 'rgba(11, 9, 26, 0.808)' }}
            >
              <Table
                sx={{ minWidth: 320, bgcolor: 'inherit' }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Number</TableCell>
                    <TableCell align="right">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visibleContacts.map(({ id, name, number }) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="right">{number}</TableCell>
                      <TableCell align="right">
                        <Button
                          type="button"
                          onClick={() => dispatch(deleteContact(id))}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
      {/* {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))} */}
    </ContactsList>
  );
};

export default ContactList;
