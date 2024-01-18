'use client';
import './index.css';
import React from 'react';
import { ThemeProvider, Typography, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { Animate, AnimateGroup, useAnimate }  from 'react-simple-animate';

/**
 * Display a header text that spans the entire screen
 *
 * @param {*} props
 * @returns
 */
export default function TitleCard(props) {

    // hook for simple transition animation
    const { play, style } = useAnimate({
        start: { opacity: 0 },
        end: { opacity: 1 }
      });


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Animate
                play={true}
                duration={3}
                start={{ opacity: 0, filter: 'blur(10px)' }}
                end={{ opacity: 1, filter: 'blur(0)' }}
            >
                <Typography className='shine' variant='h1'>{props.titleText}</Typography>
            </Animate>
        </ThemeProvider>
    );
}
