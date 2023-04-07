import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import imgBeers from '../../assets/beers.jpg';

import IconLock from '@mui/icons-material/Lock';

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();

  const onSubmit = () => {};

  return (
    <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
      <Grid
        item
        sm={7}
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            opacity: '96%',
          }}
          src={imgBeers}
          alt="Beer tap"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 8,
        }}
      >
        <>
          <Box
            sx={{
              borderRadius: '50%',
              width: 55,
              height: 55,
              backgroundColor: (theme) => theme.palette.secondary.main,
              mb: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <IconLock />
          </Box>
          <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Controller
              control={control}
              name="name"
              rules={{
                required: 'This field is required',
              }}
              render={({ field }) => (
                <FormControl fullWidth>
                  <TextField
                    margin="normal"
                    autoFocus
                    fullWidth
                    label="Name"
                    variant="outlined"
                    error={Boolean(errors?.name)}
                    helperText={errors?.name?.message as string}
                    {...field}
                  />
                </FormControl>
              )}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, pt: 1.5, pb: 1.5, pl: 8, pr: 8 }}
              disabled={isSubmitted && !isValid}
            >
              Login
            </Button>
          </Box>
        </>
      </Grid>
    </Grid>
  );
}

export default Login;
