import NextLink from 'next/link'
import { 
    Link,
    SimpleGrid,
    Box, 
    Heading,
    Button,
    List,
    ListItem,
    Icon,
    Image
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoMailSharp,
    IoCallSharp
} from 'react-icons/io5'

const IndexPage = () => {
    return (
        <Box>
            {/* Description */}
            <Section delay={0.1}>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, vulputate eu lacus vitae, tincidunt suscipit massa. Cras venenatis arcu eu ex fermentum, et ultrices ligula tempor. Pellentesque ac eleifend ipsum {' '}
                    <NextLink href="/projects/inkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My Projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            {/* Timeline */}
            <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                    <BioYear>1984</BioYear> 
                    Born in Osaka (大阪), Japan.
                    </BioSection>
                    <BioSection>
                        <BioYear>2010</BioYear>
                        Completed the Master&apos;s Program in the Graduate School of
                        Information Science at Nara Institute of Science and Technology
                        (奈良先端科学技術大学院大学情報科学研究科修士課程)
                    </BioSection>
                    <BioSection>
                        <BioYear>2010</BioYear>
                        Worked at Yahoo! Japan (ヤフー株式会社入社)
                    </BioSection>
                    <BioSection>
                        <BioYear>2012 to present</BioYear>
                        Work as freelance
                    </BioSection>
            </Section>

            {/* Habilidades */}
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Habilidades
                </Heading>
            </Section>

            {/* Curriculum */}
            <Section delay={0.5}>
                <Heading as="h3" variant="section-title" mb={10}>
                    Curriculum
                </Heading>
                <Link
                    maxWidth="50%" 
                    ml="25%"
                    href="/files/CV.pdf"                
                    alt="CV"
                    target="_blank"
                    rel="noopener noreferrer"> 

                    <Image 
                        maxWidth="50%" 
                        className="cv_image"
                        display="inline-block" 
                        src="/images/Diego Muñoz CV.png" 
                        alt="CV Image" />
                </Link>
            </Section>

            {/* Contacto */}
            <Box>
                <Heading as="h3" variant="section-title">
                    Contacto
                </Heading>
                <SimpleGrid columns={[1,2,2]} align="center">
                    <List mt={2} textAlign="left">
                        <ListItem>
                            <Link 
                                href="www.google.es"
                                target="_blank">
                                <Button
                                    variant="ghost"
                                    color="linkColor"
                                    leftIcon={<Icon as={IoLogoGithub} />}>
                                    GitHub
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link>
                                <Button
                                    variant="ghost"
                                    color="linkColor"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Linkedin
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <List mt={2} textAlign="right">
                        <ListItem>
                            <Link>
                                <Button
                                    variant="ghost"
                                    color="linkColor"
                                    leftIcon={<Icon as={IoMailSharp} />}>
                                    diego171200@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link>
                                <Button
                                    variant="ghost"
                                    color="linkColor"
                                    leftIcon={<Icon as={IoCallSharp} />}>
                                    +34 633 54 32 40
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default IndexPage