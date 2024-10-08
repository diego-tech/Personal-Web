import Logo from "./logo";
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from "./theme-toggle-button";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimateDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const NavBar = props => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff44', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
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
                        flexGrow={1}>
                    </Stack>
                    <Box flex={1} align="right">
                        <ThemeToggleButton />
                    </Box>
                </Container>
            </AnimateDiv>
        </Box>
    )
}

export default NavBar