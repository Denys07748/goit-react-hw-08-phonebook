import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Icon } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'rgba(11, 9, 26, 0.808)',
  border: '1px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 2,
};

const AddContact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        '& :hover': {
          color: '#2393dd',
        },
      }}
    >
      <Icon
        sx={{
          fontSize: 30,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleOpen}
      >
        add_circle
      </Icon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm onClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AddContact;
