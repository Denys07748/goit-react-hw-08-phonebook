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
import { container, icon, table } from 'styles';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Container sx={container.contactList}>
      {contacts.length === 0 ? (
        <Box sx={container.contactHead}>
          <Typography variant="h7">
            There are no contacts in your phone book yet. Please add contacts.
          </Typography>
          <AddContact />
        </Box>
      ) : (
        <>
          <Box sx={container.contactHead}>
            <Filter />
            <Box sx={container.contactHead}>
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
              <Table sx={table.tableContacts} aria-label="simple table">
                <TableHead>
                  <TableRow sx={table.tableRowHead}>
                    <TableCell sx={table.tableCell}>Name</TableCell>
                    <TableCell align="center" sx={table.tableCell}>
                      Number
                    </TableCell>
                    <TableCell align="right" sx={table.tableCell}>
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visibleContacts.map(({ id, name, number }) => (
                    <TableRow key={id} sx={table.tableRowContact}>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="center">{number}</TableCell>
                      <TableCell align="right">
                        <DeleteIcon
                          sx={icon.deleteIcon}
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
