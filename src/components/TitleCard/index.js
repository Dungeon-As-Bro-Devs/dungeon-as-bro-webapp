'use client';
import React from 'react';
import { ThemeProvider, Typography, createTheme, Box, CssBaseline } from '@mui/material';
import localFont from "@next/font/local";
import theme from '@/theme';


/**
 * Display a header text that spans the entire screen
 *
 * @param {*} props
 * @returns
 */
export default function TitleCard(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant='h1'>{props.titleText}</Typography>
        </ThemeProvider>
    );
}
