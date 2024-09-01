import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../navbar';
import { Box, Container, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import Footer from '../footer';
import Section from '../section';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Main = ({ children, router }) => {
    const [showSpan, setShowSpan] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpan(false);
        }, 10000);

        return () => clearTimeout(timer); 
    }, []);

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
                        display={{ md: 'flex' }}
                        mt={6}
                        alignItems="center">
                        <Box
                            flexShrink={0}
                            mt={{ base: 4, md: 0 }}
                            ml={{ md: 6 }}
                            align="center">

                            <Image
                                borderWidth={2}
                                borderStyle="solid"
                                maxWidth="140px"
                                display="inline-block"
                                borderRadius="30"
                                borderColor={useColorModeValue('#18181a', '#f9fafb')}
                                src="/images/diego.webp"
                                alt="Profile Image" />
                        </Box>
                        <Box flexGrow={1} align="center" ml={6}>
                            <Heading as='h2' variant='page-title' pb={2}>
                                Diego Muñoz Herranz
                            </Heading>
                            <p>Junior Data Analyst en KPMG España <br /> (Desarrollador y Analista de Datos)</p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', marginTop: '6px' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ marginRight: '10px' }}
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                                Madrid, España
                            </span>

                            <footer className='rssFooter'>
                                <a
                                    className='rssLink'
                                    href={`mailto:diego171200@gmail.com`}
                                    title="Enviar un correo electrónico a Diego Muñoz Herranz al correo diego171200@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className='rssSvg'
                                    ><rect width="20" height="16" x="2" y="4" rx="2"></rect><path
                                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                </a>
                                <a
                                    className='rssLink'
                                    href={`tel:633543240`}
                                    title="Enviar un correo electrónico a Diego Muñoz Herranz al correo diego171200@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className='rssSvg'
                                    ><path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                    ></path></svg>
                                </a>
                                <a
                                    className='rssLink'
                                    href='https://www.linkedin.com/in/diego-mu%C3%B1oz-herranz-b03a42182/'
                                    title='Visitar el perfil de Diego Muñoz en Linkedin'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <svg
                                        height="16"
                                        width="16"
                                        viewBox="0 0 24 24"
                                        className="rssSvg"
                                        xmlns="http://www.w3.org/2000/svg"
                                    ><path
                                        fill="currentColor"
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    ></path></svg>
                                </a>
                                <a
                                    className='rssLink'
                                    href="/files/CV_Diego_Munoz_Herranz.pdf"
                                    title="Curriculum Diego Muñoz Herranz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className='rssSvg'
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </a>
                                {showSpan && (
                                    <span className="fadeOut"> <ChevronLeftIcon /> Descargar CV Aquí</span>
                                )}
                            </footer>
                        </Box>
                    </Box>
                </Section>
                {children}
                <Footer />
            </Container>
            <style jsx>{`
                .fadeOut {
                    position: fixed;
                    bottom: -5px;
                    right: 30px;
                    border-radius: 5px;
                    padding: 10px;
                    animation: fadeOut 10s forwards;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </Box>
    );
}

export default Main;
