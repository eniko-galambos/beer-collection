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
import { useState } from 'react';
import { useListBeersQuery } from '../../redux/api/beers/beers';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Beer } from '../../redux/api/beers/types';
import Pagination from '../../components/Pagination/Pagination';
import imgNoImage from '../../assets/no-image.jpg';
import routes from '../../routes';

const List = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchKey, setSearchKey] = useState('');

  const { currentData, isFetching } = useListBeersQuery(
    { page: Number(searchParams.get('page')), searchKey },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKey(event.target.value);
    setSearchParams({ page: '1' });
  };

  const handleClickCard = (id: number) => {
    navigate(`${routes.list}/${id}`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
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
          onChange={handleChange}
          value={searchKey}
          autoFocus
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="Search"
          color="primary"
        >
          <IconSearch />
        </IconButton>
      </Paper>
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
          <Box sx={{ mt: 4 }}>
            {currentData.length > 0 && (
              <>
                <Grid container spacing={3}>
                  {currentData.map((beer: Beer) => (
                    <Grid item key={beer.id} xs={12} sm={6} md={4}>
                      <Card onClick={() => handleClickCard(beer.id)}>
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
