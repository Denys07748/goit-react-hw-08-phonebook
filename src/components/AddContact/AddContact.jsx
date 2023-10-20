import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Icon } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import { container, icon } from 'styles';

const AddContact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={container.addContact}>
      <Icon sx={icon.addContact} onClick={handleOpen}>
        add_circle
      </Icon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={container.contactForm}>
          <ContactForm onClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AddContact;
