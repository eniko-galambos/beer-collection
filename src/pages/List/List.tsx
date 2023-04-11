import { Container, IconButton, InputBase, Paper, Box } from '@mui/material';
import IconSearch from '@mui/icons-material/Search';
import { KeyboardEvent, useState } from 'react';

const List = () => {
  const [searchKeyCurrentValue, setSearchKeyCurrentValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyCurrentValue(event.target.value);
  };

  const handleSubmit = (): void => {
    // TODO searchKeyCurrentValue
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
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
    </Container>
  );
};

export default List;
