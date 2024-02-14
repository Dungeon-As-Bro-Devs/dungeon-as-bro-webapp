'use client';
import React from 'react';
import { Container } from '@mui/material';

/**
 * Simple layout that displays a background image.
 *
 * @author HK Transfield
 * @param {*} children
 * @returns
 */
export default function Landing({children}) {
  return (
    <div className="background-image min-h-screen flex items-center justify-center">
      <Container>
        {children}
      </Container>
    </div>
  );
};
