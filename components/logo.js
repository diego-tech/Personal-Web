import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react"
import { useTranslation } from "../libs/i18n"

const Logo = () => {
    const { t } = useTranslation()
    const accent = useColorModeValue('#5A82B8', '#f3a269')

    return (
        <Link href="/" passHref aria-label={t.nav.logoAria} title={t.nav.logoAria}>
            <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily="Space Mono"
                fontSize="22"
                fontWeight="bold">
                dm
                <Text as="span" color={accent}>.</Text>
            </Text>
        </Link>
    )
}

export default Logo
