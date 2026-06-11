import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" mt={8}>
      <Text>
        &copy; {new Date().getFullYear()} Diego Muñoz Herranz. Todos los derechos reservados.
      </Text>
      <Text fontSize="xs" mt={1}>
        Hecho con Next.js y Chakra UI desde Madrid.
      </Text>
    </Box>
  )
}

export default Footer
