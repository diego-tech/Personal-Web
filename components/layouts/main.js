import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Footer from '../footer'
import Section from '../section'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Diego's Homepage" />
                <meta name="author" content="Diego Muñoz Herranz" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
                <title>Diego Muñoz - Portafolio</title>
            </Head>

            <NavBar path={router.asPath} />
                <Container maxW="container.md" pt={14}>
                    <Section delay={0.1}>
                        <Box 
                            display={{md: 'flex'}} 
                            mt={6} 
                            alignItems="center">
                            <Box 
                                flexShrink={0} 
                                mt={{base: 4, md: 0}}
                                ml={{ md: 6 }}
                                align="center">
                                
                                <Image 
                                    borderWidth={2} 
                                    borderStyle="solid" 
                                    maxWidth="120px"
                                    display="inline-block" 
                                    borderRadius="30" 
                                    borderColor={useColorModeValue('#18181a', '#f9fafb')}
                                    src="/images/diego.jpg" 
                                    alt="Profile Image" />
                            </Box>
                            <Box flexGrow={1} align="center" ml={6}>
                                <Heading as='h2' variant='page-title' pb={2}>
                                    Diego Muñoz Herranz
                                </Heading>
                                <p>Desarrollador de Software y Analista de Datos</p>
                            </Box>
                        </Box>
                    </Section>
                    {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main