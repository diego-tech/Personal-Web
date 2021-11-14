import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container, Heading, Image } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Diego's Homepage" />
                <meta name="author" content="Diego Muñoz Herranz" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Diego Muñoz - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />
                <Container maxW="container.md" pt={14}>
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
                                borderColor="whiteAlpha.800" 
                                borderWidth={2} 
                                borderStyle="solid" 
                                maxWidth="120px"
                                display="inline-block" 
                                borderRadius="full" 
                                src="/images/diego.jpg" 
                                alt="Profile Image" />
                        </Box>
                        <Box flexGrow={1} align="center" ml={6}>
                            <Heading as='h2' variant='page-title'>
                                Diego Muñoz Herranz
                            </Heading>
                            <p>Software Developer</p>
                        </Box>
                    </Box>
                    {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main