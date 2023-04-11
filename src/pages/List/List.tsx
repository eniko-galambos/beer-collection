import {
  Container,
  IconButton,
  InputBase,
  Paper,
  Box,
  CircularProgress,
} from '@mui/material';
import IconSearch from '@mui/icons-material/Search';
import { KeyboardEvent, useState } from 'react';
import { useListBeersQuery } from '../../redux/api/beers/beers';
import { useSearchParams } from 'react-router-dom';

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { currentData, isFetching } = useListBeersQuery(
    { page: Number(searchParams.get('page')) },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  console.log('currentData', currentData);

  const [searchKeyCurrentValue, setSearchKeyCurrentValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyCurrentValue(event.target.value);
  };

  const handleSubmit = (): void => {
    // TODO searchKeyCurrentValue
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      {isFetching && (
        <Box
          sx={{
            width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
      {!isFetching && (
        <Box component="form">
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: {
                xs: '100%',
                md: '300px',
              },
            }}
          >
            <InputBase
              sx={{ ml: 1.5, flex: 1 }}
              placeholder="Search"
              inputProps={{
                'aria-label': 'Search',
              }}
              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              onChange={handleChange}
              value={searchKeyCurrentValue}
            />
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="Search"
              onClick={handleSubmit}
              color="primary"
            >
              <IconSearch />
            </IconButton>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default List;
