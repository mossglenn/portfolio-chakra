'use client';

import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '@/theme';

import { ColorModeProvider } from './color-mode';

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={customTheme}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  );
}
