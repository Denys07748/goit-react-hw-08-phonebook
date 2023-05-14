import { ContactsList } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return contacts.length === 0 ? (
    <p>Сontacts not found</p>
  ) : (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

export default ContactList;
