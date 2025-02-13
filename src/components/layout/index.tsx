'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
