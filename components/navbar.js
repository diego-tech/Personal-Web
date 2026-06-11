import Logo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
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

const AnimateDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const navItems = [
    { href: '/#sobre-mi', label: 'Sobre mí' },
    { href: '/#experiencia', label: 'Experiencia' },
    { href: '/#proyectos', label: 'Proyectos' },
    { href: '/#contacto', label: 'Contacto' }
]

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

const NavBar = props => {
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
                        justifyContent="flex-end"
                        mr={2}>
                        {navItems.map(item => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </Stack>
                    <Box display="flex" alignItems="center" gap={2}>
                        <ThemeToggleButton />
                        <Box display={{ base: 'inline-block', md: 'none' }}>
                            <Menu isLazy>
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    aria-label="Abrir menú de navegación"
                                />
                                <MenuList>
                                    {navItems.map(item => (
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
