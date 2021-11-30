import Logo from "./logo";
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimateDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const LinkItem = ({ href, _target, children, ...props }) => {
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          color={useColorModeValue('#202023', 'white')}
          _target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
}
const NavBar = props => {
    const { path } = props

    return (
        <Box
         position="fixed"
         as="nav"
         w="100%"
         bg={useColorModeValue('#ffffff40', '#20202380')}
         css={{ backdropFilter: 'blur(10px)' }}
         zIndex={1}
         {...props}
         >
        <AnimateDiv
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.8}}>
            <Container 
                display="flex"  
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
                verticalAlign="center">
                <Flex align="center" mr={5}>
                    <Heading 
                        as="h1" 
                        size="lg" 
                        letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    pt={1}>

                    <LinkItem href="/projects" path={path}>
                        Proyectos
                    </LinkItem>
                    <LinkItem href="mailto:diego171200@gmail.com" path={path}>
                        Contacto
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box 
                        ml={2}
                        display={{base: 'inline-block', md:'none'}}>
                    
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant="outline"
                                aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Sobre Mí</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Proyectos</MenuItem>
                                </NextLink>
                                <NextLink href="mailto:diego171200@gmail.com" passHref>
                                    <MenuItem as={Link}>Contacto</MenuItem>
                                </NextLink>
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