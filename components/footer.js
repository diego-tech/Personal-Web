import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={4}>
      &copy; {new Date().getFullYear()} Diego Muñoz Herranz. All Rights Reserved.
    </Box>
  )
}

export default Footer