import { Box } from "@chakra-ui/react";

type AppShellProps = {
  content: React.ReactNode;
  topBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
};

export const AppShell = ({ content, topBar, bottomBar }: AppShellProps) => (
  <>
    <style jsx global>{`
    html, body, #__next {
      width: 100%; height: 100%;
    }`}
    </style>
    <Box
      className="AppShell"
      w="100%"
      h="100%"
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="auto 1fr auto"
    >
      <Box className="AppShell__topBar">{topBar}</Box>
      <Box className="AppShell__content" h="100%" overflow="auto">
        {content}
      </Box>
      <Box className="AppShell__bottomBar">{bottomBar}</Box>
    </Box>
  </>
);