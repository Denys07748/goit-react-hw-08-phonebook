import { Box } from '@mui/material';
import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Box pt={2}>
      <FilterInput
        type="text"
        placeholder="Find contacts"
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default Filter;
