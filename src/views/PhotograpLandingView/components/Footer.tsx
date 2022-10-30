import { GridItem, Stack, Text } from "@chakra-ui/react";
import { GridMain } from "../shared/components/layout/GridMain";

export const Footer = () => {
  return (
    <GridMain minH="96px">
      <GridItem gridColumn={{ base: "3/-3", md: "2/-2" }} alignSelf="center">
        <Stack
          w="full"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Text textStyle="navItem"># 2022 The Photographer</Text>
          <Text textStyle="navItem">photographer@me.com</Text>
        </Stack>
      </GridItem>
    </GridMain>
  );
};
