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
import { useTranslation } from '../libs/i18n'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Container mt={10}>
      <Heading as="h1">{t.notFound.title}</Heading>
      <Text>{t.notFound.text}</Text>
      <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button
            color={useColorModeValue('#18181a', '#f9fafb')}
            bgColor={useColorModeValue('#779ECB', '#f3a269')}
          >
            {t.notFound.button}
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
