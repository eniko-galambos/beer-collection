import {
  Container,
  IconButton,
  InputBase,
  Paper,
  Box,
  CircularProgress,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import IconSearch from '@mui/icons-material/Search';
import { KeyboardEvent, useState } from 'react';
import { useListBeersQuery } from '../../redux/api/beers/beers';
import { useSearchParams } from 'react-router-dom';
import { Beer } from '../../redux/api/beers/types';
import Pagination from '../../components/Pagination/Pagination';
import imgNoImage from '../../assets/no-image.jpg';

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { currentData, isFetching } = useListBeersQuery(
    { page: Number(searchParams.get('page')) },
    {
      refetchOnMountOrArgChange: true,
    },
  );

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
      {!isFetching && currentData && (
        <Box>
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
          <Box sx={{ mt: 4 }}>
            {currentData.length > 0 && (
              <>
                <Grid container spacing={3}>
                  {currentData.map((beer: Beer) => (
                    <Grid item key={beer.id} xs={12} sm={6} md={4}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="180"
                            image={beer.image_url || imgNoImage}
                            alt={beer.name}
                            sx={{ objectFit: 'contain', pt: 4, pb: 4 }}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              noWrap
                            >
                              {beer.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              noWrap
                            >
                              {beer.tagline}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Pagination />
              </>
            )}
            {currentData.length === 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2">No results</Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default List;
