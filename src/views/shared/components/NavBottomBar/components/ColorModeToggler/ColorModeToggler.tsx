import React from "react";
import { Button, Center, Flex, IconButton, useColorMode } from "@chakra-ui/react";
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
        p={0.5}
        borderRadius="20px"
        bg="gray.700"
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
  return (
    <Center
      p={1}
      borderRadius="50%"
      color="gray.50"
      _hover={{
        ...(!isActive && {
          bg: "gray.600"
        })
      }}
      {...(isActive && {
        bg: "gray.500"
      })}
    >{children}</Center>
  );
};