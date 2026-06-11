import React from 'react';
import Head from 'next/head';
import NavBar from '../navbar';
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { EmailIcon, DownloadIcon } from '@chakra-ui/icons';
import Footer from '../footer';
import Section from '../section';
import { useTranslation } from '../../libs/i18n';

const SITE_URL = 'https://www.dmunoz.dev';

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Diego Muñoz Herranz',
    url: SITE_URL,
    image: `${SITE_URL}/images/diego.webp`,
    jobTitle: 'Data Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'Dentsu'
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressCountry: 'ES'
    },
    sameAs: [
        'https://www.linkedin.com/in/diego-mu%C3%B1oz-herranz-b03a42182/',
        'https://github.com/diego-tech'
    ],
    knowsAbout: [
        'Data Engineering',
        'Python',
        'PySpark',
        'Azure Databricks',
        'Machine Learning',
        'SQL'
    ]
};

const Main = ({ children, router }) => {
    const { t, locale } = useTranslation();
    const pathname = router.asPath.split('?')[0];
    const pagePath = pathname === '/' ? '' : pathname;
    const localePrefix = locale === 'es' ? '' : `/${locale}`;
    const canonicalUrl = `${SITE_URL}${localePrefix}${pagePath}`;
    const accent = useColorModeValue('#5A82B8', '#f3a269');

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={t.meta.description} />
                <meta name="author" content="Diego Muñoz Herranz" />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hrefLang="es" href={`${SITE_URL}${pagePath}`} />
                <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en${pagePath}`} />
                <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${pagePath}`} />
                <link rel="apple-touch-icon" href="/images/logo.png" />
                <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Diego Muñoz Herranz" />
                <meta property="og:title" content={t.meta.ogTitle} />
                <meta property="og:description" content={t.meta.description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={`${SITE_URL}/images/diego.webp`} />
                <meta property="og:locale" content={t.meta.ogLocale} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={t.meta.ogTitle} />
                <meta name="twitter:description" content={t.meta.description} />
                <meta name="twitter:image" content={`${SITE_URL}/images/diego.webp`} />
                <title>{t.meta.title}</title>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
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
                            mr={{ md: 8 }}
                            textAlign="center">

                            <Image
                                borderWidth={3}
                                borderStyle="solid"
                                boxSize="140px"
                                objectFit="cover"
                                display="inline-block"
                                borderRadius="full"
                                borderColor={accent}
                                src="/images/diego.webp"
                                alt={t.hero.photoAlt} />
                        </Box>
                        <Box flexGrow={1} mt={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
                            <Heading as='h1' variant='page-title' pb={1}>
                                Diego Muñoz Herranz
                            </Heading>
                            <Text fontWeight="bold" color={accent}>
                                {t.hero.role}
                            </Text>
                            <Text fontSize="sm" mt={2} maxW="md" mx={{ base: 'auto', md: 0 }}>
                                {t.hero.tagline}
                            </Text>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                spacing={3}
                                mt={4}
                                justify={{ base: 'center', md: 'flex-start' }}
                                align="center">
                                <Button
                                    as="a"
                                    href="mailto:diego171200@gmail.com"
                                    leftIcon={<EmailIcon />}
                                    bg={accent}
                                    color={useColorModeValue('white', '#18181a')}
                                    _hover={{ opacity: 0.85, transform: 'translateY(-2px)' }}
                                    size="sm">
                                    {t.hero.ctaTalk}
                                </Button>
                                <Button
                                    as="a"
                                    href="/files/CV_Diego_Munoz_Herranz.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    leftIcon={<DownloadIcon />}
                                    variant="outline"
                                    borderColor={accent}
                                    color={accent}
                                    _hover={{ bg: useColorModeValue('#5A82B815', '#f3a26915'), transform: 'translateY(-2px)' }}
                                    size="sm">
                                    {t.hero.ctaCV}
                                </Button>
                            </Stack>

                            <footer className='rssFooter'>
                                <a
                                    className='rssLink'
                                    href="mailto:diego171200@gmail.com"
                                    title={t.hero.emailTitle}
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
                                    href="tel:+34633543240"
                                    title={t.hero.phoneTitle}>
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
                                    title={t.hero.linkedinTitle}
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
                            </footer>
                        </Box>
                    </Box>
                </Section>
                {children}
                <Footer />
            </Container>
        </Box>
    );
}

export default Main;
