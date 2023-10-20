import bgImage from 'images/bg_img.jpg';

export const main = {
  mt: '5rem',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

export const addContact = {
  '& :hover': {
    color: '#2393dd',
  },
};

export const contactForm = {
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

export const contactList = {
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(11, 9, 26, 0.808)',
  maxWidth: '500px',
  outline: '2px solid gray',
  borderRadius: '8px',
  padding: '15px',
};

export const contactHead = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const filter = { mb: 1, width: '25ch' };

export const form = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(11, 9, 26, 0.808)',
  width: '350px',
  outline: '2px solid gray',
  borderRadius: '8px',
  padding: '15px',
};

export const spinner = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const userMenu = {
  display: 'flex',
  alignItems: 'center',
};
