import React from 'react'
import { Box, BoxProps, Text, useColorMode } from '@chakra-ui/react'
import { IS_DEVELOPMENT, IS_PRODUCTION, IS_STAGING } from '@/constants/client'


// Main Component
export const CurrentColorModeBanner = () => {
  if (IS_DEVELOPMENT) return <Inner />
  if (IS_STAGING) return <Inner bg="orange.400" />
  if (IS_PRODUCTION) return null;
  return null;
}


const Inner = ({ ...rest }: BoxProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box w="100%" bg="white" color="black" {...rest}>
      <Text textAlign="center" fontSize="xs" fontWeight="bold">Current Color Mode: {colorMode}</Text>
    </Box>
  )
}