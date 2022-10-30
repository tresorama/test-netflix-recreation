import React from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { ColorModeTogglerButton, ColorModeTogglerSwitch } from "./components/ColorModeToggler/ColorModeToggler";
import { DebugBar } from '@/views/shared/components/DebugBar';
// import { IS_PRODUCTION } from "@/constants/client";


export const NavBottomBar = () => {
  const router = useRouter();
  // if (IS_PRODUCTION) return null;

  return (
    <>
      {/* NAV BAR */}
      <Box position="fixed" bottom="0" left="0" right="0">
        {/* NAV BAR - MAIN CONTENT */}
        <Box bg="gray.900" color="white">
          <Flex sx={{ "& > *": { flex: '1' } }}>
            <BarItem
              Icon={SearchIcon}
              labelText={'Search'}
              isActive={router.pathname === '/'}
              onClick={() => router.push("/")}
            />
            <BarItem
              Icon={() => (
                <>
                  <ColorModeTogglerButton />
                  <ColorModeTogglerSwitch />
                </>
              )}
              labelText={''}
            />
            <BarItem
              Icon={AddIcon}
              labelText={'Add'}
              isActive={router.pathname === '/'}
              onClick={() => router.push("/")}
            />
          </Flex>
        </Box>
        {/* NAV BAR - EXTRA */}
        <DebugBar />
      </Box>

      {/* SPACER - SIMULATE NAV BAR HEIGHT */}
      <Box h={20} />
    </>
  );
};


type BarItemProps = {
  Icon: React.ElementType,
  labelText: string,
  onClick?: () => void,
  isActive?: boolean;
};
const BarItem = ({ Icon, labelText, onClick, isActive = false }: BarItemProps) => (
  <Center onClick={onClick} pt={3} pb={2} px={2} opacity={isActive ? '1' : '0.4'}>
    <Stack spacing={1} alignItems="center">
      {Icon && <Icon fontSize="1.3em" />}
      <Text fontSize="xs">{labelText}</Text>
    </Stack>
  </Center>
);