import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Box component="form" sx={{ mb: 1, width: '25ch' }} noValidate>
      <TextField
        id="outlined-basic"
        label="Find contacts"
        variant="outlined"
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default Filter;
