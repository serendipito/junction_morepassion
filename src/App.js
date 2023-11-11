import * as React from 'react';
import { useState, useCallback } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


  const [showSong, setShowSong] = useState(false);
  const [selectedSong, setSelectedSong] = useState({});

  const handleChange = (_e, newValue) => {
    setSelectedSong(newValue);
    setShowSong(false);
  }

  const handleSearch =  useCallback(
    (e) => {
      e.preventDefault();
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
                {/* <Box
                style={{paddingLeft: "20px", paddingRight: "20px", marginTop: "10px", marginBottom: "10px"}}>
          <p>Type (or select) a song you like and we will generate a matching exercise for it!</p>
          </Box> */}
          <Box component="form" noValidate sx={{ mt: 1 }}>

            <SearchBar onChange={handleChange} />

            <Button
              type="submit"
              color="secondary"
              onClick={handleSearch}
              // color="passion" 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{marginBottom: "20px", marginTop: "10px"}}
            >
              Generate an exercise
            </Button>
            </Box>

            <Grid container style={{display: showSong && selectedSong && Object.keys(selectedSong).length > 0 ? "block" : "none"}}>
            <CardMedia
            component='video'
            image={showSong && selectedSong && Object.keys(selectedSong).length > 0 ? `/videos/${selectedSong.media}` : ""}
            controls
        />
              {/* <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" /> */}
            </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}