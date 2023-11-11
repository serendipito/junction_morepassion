import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Spotify } from 'react-spotify-embed';

import SearchBar from "./SearchBar"

import logo from './logo5.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Junction 2023 © '}
      <Link color="inherit" href="https://vilna.network/morepassion">
        MorePassion
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function PlaySong() {


  const [showSong, setShowSong] = React.useState(false);


  const handleSearch =  React.useCallback(
    (e) => {
      e.preventDefault();

      // TODO: actually this will involve an api request to the backend and some data passed from it
      // but for the time being we just hide the one song we are embedding
      setShowSong(true);
    },
    [showSong]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
              // height: 284,
              width: 300,
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="More passion logo."
            src={logo}
          />
                <Box
                style={{paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", marginBottom: "20px"}}>
          <p>Type (or select) a song you like and we will find a matching exercise for it!</p>
          </Box>
          <Box component="form" noValidate sx={{ mt: 1 }}>

            <SearchBar />

            <Button
              type="submit"
              color="secondary"
              onClick={handleSearch}
              // color="passion" 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{marginBottom: "20px"}}
            >
              Search
            </Button>
            </Box>

            <Grid container style={{visibility: showSong ? "visible" : "hidden"}}>
              <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
            </Grid>

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}