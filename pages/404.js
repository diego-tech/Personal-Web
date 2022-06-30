import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container mt={10}>
      <Heading as="h1">Page Not Found</Heading>
      <Text>La página que busca no se ha encontrado.</Text>
      <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button
            color={useColorModeValue('#18181a', '#f9fafb')}
            bgColor={useColorModeValue('#779ECB', '#f3a269')}
          >
            Volver a Inicio
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
