import React from "react";
import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { DebugBar } from '@/views/shared/components/DebugBar';

export const NavBottomBarWrapper = ({ children }: { children: React.ReactNode; }) => (
  <Box>
    {/* NAV BAR - MAIN CONTENT */}
    <Box
      borderTop="1px"
      bg="bgTertiary"
      color="textPrimary"
      borderColor="bgQuaternary"
    >
      <Flex sx={{ "& > *": { flex: '1' } }}>
        {children}
      </Flex>
    </Box>
    {/* NAV BAR - EXTRA */}
    <DebugBar />
  </Box>
);


type NavBottomBarItemProps = {
  Icon: React.ElementType,
  labelText: string,
  onClick?: () => void,
  isActive?: boolean;
};
export const NavBottomBarItem = ({ Icon, labelText, onClick, isActive = false }: NavBottomBarItemProps) => (
  <Center onClick={onClick} pt={3} pb={2} px={2} opacity={isActive ? '1' : '0.4'}>
    <Stack spacing={1} alignItems="center">
      {Icon && <Icon fontSize="1.3em" />}
      <Text fontSize="xs">{labelText}</Text>
    </Stack>
  </Center>
);