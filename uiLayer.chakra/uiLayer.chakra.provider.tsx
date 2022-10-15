import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./uiLayer.chakra.customTheme";

interface IChakraUIProviderProps {
  children: React.ReactNode;
}
export default function ChakraUIProvider(props: IChakraUIProviderProps) {
  return (
    <>
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
    </>
  );
}
