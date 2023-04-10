import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { getAuthData } from '../../redux/store/authData/authDataSlice';
import { useAppSelector } from '../../redux/store/hooks';

function Header() {
  const authData = useAppSelector(getAuthData);
  const { name } = authData;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Beer collection
          </Typography>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                mr: 2,
                display: {
                  xs: 'none',
                  sm: 'initial',
                },
              }}
            >
              Welcome, {name}
            </Typography>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="User" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
