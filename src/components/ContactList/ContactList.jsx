import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import AddContact from 'components/AddContact/AddContact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(11, 9, 26, 0.808)',
        maxWidth: '500px',
        outline: '2px solid gray',
        borderRadius: '8px',
        padding: '15px',
      }}
    >
      {contacts.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h7">
            There are no contacts in your phone book yet. Please add contacts.
          </Typography>
          <AddContact />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Filter />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h7" mr={1}>
                Add contact
              </Typography>
              <AddContact />
            </Box>
          </Box>
          {visibleContacts.length === 0 ? (
            <p>Contacts not found</p>
          ) : (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 320, bgcolor: 'inherit' }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ color: '#5ca8f4' }}>
                    <TableCell sx={{ color: 'inherit' }}>Name</TableCell>
                    <TableCell align="center" sx={{ color: 'inherit' }}>
                      Number
                    </TableCell>
                    <TableCell align="right" sx={{ color: 'inherit' }}>
                      Delete
                    </TableCell>
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
                      <TableCell align="center">{number}</TableCell>
                      <TableCell align="right">
                        <DeleteIcon
                          sx={{
                            cursor: 'pointer',
                          }}
                          onClick={() => dispatch(deleteContact(id))}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default ContactList;
