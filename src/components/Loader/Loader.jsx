import Box from '@mui/material/Box';
import { ColorRing } from 'react-loader-spinner';
import { container } from 'styles';

const Loader = () => {
  return (
    <Box sx={container.spinner}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </Box>
  );
};

export default Loader;
