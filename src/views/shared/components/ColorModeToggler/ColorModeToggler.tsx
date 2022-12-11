import React from "react";
import { Button, Center, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeTogglerButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        aria-label="color-mode-toggler"
        onClick={toggleColorMode}
        size="xs"
        color="text"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </>
  );
};

export const ColorModeTogglerSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        variant="unstyled"
        onClick={toggleColorMode}
        p={"0.35em 0.5em"}
        borderRadius="20px"
        _light={{
          bg: "gray.300"
        }}
        _dark={{
          bg: "gray.700"
        }}
      >
        <Flex gap={0.5}>
          <SwitcherItem isActive={colorMode === 'light'}>
            <SunIcon />
          </SwitcherItem>
          <SwitcherItem isActive={colorMode === 'dark'}>
            <MoonIcon />
          </SwitcherItem>
        </Flex>
      </Button>
    </>
  );
};
const SwitcherItem = ({ children, isActive }: { isActive: boolean, children: React.ReactNode; }) => {
  const color = useColorModeValue('red.400', 'gray.50');
  const bg = {
    active: useColorModeValue('gray.100', 'gray.500'),
    inactive: undefined,
  }[isActive ? 'active' : 'inactive'];
  const _hover = {
    active: {},
    inactive: {
      bg: useColorModeValue('gray.200', 'gray.600'),
    },
  }[isActive ? 'active' : 'inactive'];

  return (
    <Center
      p={1}
      borderRadius="50%"
      color={color}
      bg={bg}
      _hover={_hover}
    >{children}</Center>
  );
};