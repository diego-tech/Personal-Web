import Logo from "./logo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
    Container,
    Box,
    Button,
    Link,
    Stack,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from "./theme-toggle-button";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "../libs/i18n";

const AnimateDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const NavLink = ({ href, children }) => (
    <Link
        as={NextLink}
        href={href}
        p={2}
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        _hover={{
            textDecoration: 'none',
            color: useColorModeValue('#5A82B8', '#f3a269')
        }}
    >
        {children}
    </Link>
)

const LanguageSwitcher = () => {
    const router = useRouter()
    const { t, locale } = useTranslation()
    const [isNavigating, setIsNavigating] = useState(false)

    useEffect(() => {
        const onStart = () => setIsNavigating(true)
        const onEnd = () => setIsNavigating(false)
        router.events.on('routeChangeStart', onStart)
        router.events.on('routeChangeComplete', onEnd)
        router.events.on('routeChangeError', onEnd)
        return () => {
            router.events.off('routeChangeStart', onStart)
            router.events.off('routeChangeComplete', onEnd)
            router.events.off('routeChangeError', onEnd)
        }
    }, [router.events])

    const otherLocale = locale === 'es' ? 'en' : 'es'
    const flagLabel = otherLocale === 'en' ? '🇬🇧 EN' : '🇪🇸 ES'

    const handleSwitch = () => {
        if (isNavigating) return
        const currentPath = router.asPath.split('#')[0].split('?')[0]
        router.push(currentPath, currentPath, { locale: otherLocale, scroll: false })
    }

    return (
        <Button
            onClick={handleSwitch}
            isDisabled={isNavigating}
            size="sm"
            variant="outline"
            fontFamily="'Space Mono'"
            title={t.nav.langSwitchTitle}
            aria-label={t.nav.langSwitchTitle}
        >
            {flagLabel}
        </Button>
    )
}

const NavBar = props => {
    const { t } = useTranslation()

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff44', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <AnimateDiv
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <Container
                    display="flex"
                    p={2}
                    maxW="container.md"
                    wrap="wrap"
                    alignItems="center"
                    justifyContent="space-between">
                    <Flex align="center" mr={5}>
                        <Logo />
                    </Flex>
                    <Stack
                        direction="row"
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="center"
                        fontSize="sm"
                        flexGrow={1}
                        justifyContent="center">
                        {t.nav.items.map(item => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </Stack>
                    <Box display="flex" alignItems="center" gap={2}>
                        <LanguageSwitcher />
                        <ThemeToggleButton />
                        <Box display={{ base: 'inline-block', md: 'none' }}>
                            <Menu isLazy>
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    aria-label={t.nav.menuAria}
                                />
                                <MenuList>
                                    {t.nav.items.map(item => (
                                        <MenuItem key={item.href} as={NextLink} href={item.href}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </AnimateDiv>
        </Box>
    )
}

export default NavBar
