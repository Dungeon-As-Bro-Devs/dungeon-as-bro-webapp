'use client';
import React, { useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Grid, IconButton } from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import autoAnimate from '@formkit/auto-animate';

/**
 * Functional component that displays a grid of social media icons.
 * @returns
 */
function SocialMediaGrid() {

   /**
   * TODO: Move form off to the right more.
   * TODO: Change opacity of the form background
   * TODO: Add blur to the form background
   */
  return (
    <Grid container spacing={2}>
      <Grid item>
        <IconButton aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100092327695529">
          <Facebook />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="Twitter">
          <Twitter />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="Instagram" href="https://www.instagram.com/dungeonas_bro/">
          <Instagram />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/company/dungeon-as-bro/about/">
          <LinkedIn />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="YouTube">
          <YouTube />
        </IconButton>
      </Grid>
    </Grid>
  );
}

/**
 *
 * @param {*} props
 * @returns
 */
function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Dungeon As Bro Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">

        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}

        />
        <Grid
          item
          square
          xs={7}
          sm={8}
          md={4}
          component={Paper}
          elevation={6}
          sx={{
            backgroundColor: '#005F73'
          }}
          >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Subscribe to keep up-to-date with the latest news!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

              {/* Textfield for entering email */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Enter your name"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  color: "#F7FF",
                  mt: 3,
                  mb: 2,
                }}
                endIcon={<SendIcon />}
              >
                Sign In
              </Button>

              <SocialMediaGrid sx={{ mx: 'auto' }}/>
              <Copyright sx={{ mt: 5, mb: 3 }} />
              <Box
                sx={{ mx: 'auto' }}
                component={'img'}
                src="https://placeholder-cover-image.s3.ap-southeast-2.amazonaws.com/Insignia-black.png"
                height={.25}
                width={.25}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
