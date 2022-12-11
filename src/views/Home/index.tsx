import { Box, Code, Heading, Stack, Text } from '@chakra-ui/react';
import { ChakraUIProvider } from '@/lib/chakra-ui/chakra.provider';
import { AppShell } from '@/views/shared/components/AppShell/AppShell';
import { NavBottomBar } from './NavBottomBar';

export const HomeView = () => (
  <ChakraUIProvider>
    <AppShell
      bottomBar={<NavBottomBar />}
      content={<ChakraSection />}
    />
  </ChakraUIProvider>
);

const ChakraSection = () => (
  <Box maxW="container.sm" m="auto" py={20} >
    <Heading mb={8}>Hello From Chakra UI.</Heading>
    <Stack spacing={8}>
      <Text>Chakra Custom Theme is found in <Code>./src/lib/chakra-ui/chakra.theme.ts</Code>.</Text>
      <Text>An example of a marketing page is in <Code>./views/PhotograpLandingView/index.tsx</Code>.</Text>
      <Text>If you will use Chakra UI in more pages, consider moving the <Code>{'<ChakraUIProvider>'}</Code> in <Code>/pages/_app.tsx</Code> or in <Code>/pages/_document.tsx</Code></Text>
    </Stack>
  </Box>
);
