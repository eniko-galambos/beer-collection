import { useParams } from 'react-router-dom';
import { useGetBeerQuery } from '../../redux/api/beers/beers';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import imgNoImage from '../../assets/no-image.jpg';

const ListItem = () => {
  const { id } = useParams();

  const { currentData, isFetching } = useGetBeerQuery(
    { id },
    {
      refetchOnMountOrArgChange: true,
    },
  );

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
      {!isFetching && currentData?.[0] && (
        <Box>
          <Typography component="h1" variant="h4">
            {currentData[0].name}
          </Typography>
          <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
            {currentData[0].tagline}
          </Typography>
          <Grid container sx={{ mt: 1 }} spacing={5}>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 5, textAlign: 'center' }}>
                <Box
                  component="img"
                  src={currentData[0].image_url || imgNoImage}
                  alt={currentData[0].name}
                  sx={{ height: '50vh' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{currentData[0].description}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ListItem;
