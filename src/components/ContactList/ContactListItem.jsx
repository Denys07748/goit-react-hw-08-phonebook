import PropTypes from 'prop-types';
import { ContactEl } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactEl>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactEl>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
