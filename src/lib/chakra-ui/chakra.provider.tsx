import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./chakra.custom-theme";

type ChakraUIProviderProps = {
  children: React.ReactNode;
};

export const ChakraUIProvider = (props: ChakraUIProviderProps) => (
  <ChakraProvider theme={customTheme}>
    {props.children}
  </ChakraProvider>
);
