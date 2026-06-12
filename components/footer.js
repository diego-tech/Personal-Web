import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from '../libs/i18n'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" mt={8}>
      <Text>
        &copy; {new Date().getFullYear()} Diego Muñoz Herranz. {t.footer.rights}
      </Text>
    </Box>
  )
}

export default Footer
