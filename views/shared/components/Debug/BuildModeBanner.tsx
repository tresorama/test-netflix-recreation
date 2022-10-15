import { IS_DEVELOPMENT, IS_PRODUCTION, IS_STAGING } from "@/constants/client"
import { Box, BoxProps, Text } from "@chakra-ui/react";

export const BuildModeBanner = () => {
  if (IS_DEVELOPMENT) return <Inner text="DEVELOPMENT" />
  if (IS_STAGING) return <Inner text="STAGING" bg="orange.400" />
  if (IS_PRODUCTION) return null;
  return null;
}


const Inner = ({ text, ...rest }: { text: string } & BoxProps) => (
  <Box w="100%" bg="white" color="black" {...rest}>
    <Text textAlign="center" fontSize="xs" fontWeight="bold">{text}</Text>
  </Box>
)