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
  Image,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailSharp,
  IoCallSharp,
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'

const IndexPage = () => {
  return (
    <Box>
      <Layout title="Sobre Mí">
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Sobre Mí
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
            my={6}
          />
          <Paragraph>
            Hola mi nombre es Diego soy desarrollador de software y un amante de
            la tecnología.
            <br />
            <br />
            Desde el año 2014 que empezó mi andadura en las nuevas tecnologías,
            no he parado de aprender y disfrutar de este gran mundo.
            <br />
            Actualmente trabajo como <b>Junior Delivery Analyst en Deloitte</b>.
            <br />
            <br />
            Me apasionan las nuevas tecnologías y seguir aprendiendo
            constantemente.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink
              href="/projects"
            >
              <Button
                rightIcon={<ChevronRightIcon />}
                mt={5}
                color={useColorModeValue('#18181a', '#f9fafb')}
                bgColor={useColorModeValue('#779ECB', '#f3a269')}
              >
                Mis Proyectos
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
            my={6}
          />
          <BioSection m={6}>
            <BioYear>2000</BioYear>
            Nacido en Madrid, España
          </BioSection>
          <BioSection m={6}>
            <BioYear>2014</BioYear>
            Empiezo mis andaduras en la informática y la programación y realizo
            mi primer juego en Scratch{' '}
            <Link
              href="https://scratch.mit.edu/projects/79776564/embed"
              target="_blank"
              textDecoration="underline"
            >
              Ver
            </Link>
          </BioSection>
          <BioSection m={6}>
            <BioYear>2020</BioYear>
            Finalizo el Grado Medio de Sistemas Microinformáticos y Redes y
            empiezo a desarrollar mis primeros proyectos.
          </BioSection>
          <BioSection m={6}>
            <BioYear>2022</BioYear>
            Finalizo el Grado Superior en Desarrollo de Aplicaciones
            Multiplataforma junto al Higher Nacional Diploma in Computing y
            comienzo a trabajar como analista de datos en Deloitte.
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Habilidades
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
            my={6}
          />
          <P>
            Mis principales competencias son el Desarrollo de Aplicaciones
            Multiplataforma, desarrollo BackEnd, Arquitectura de Servidores y
            Análisis de Datos. Poseo conocimientos sobre diseño 2D y 3D para la
            creación de interfaces UI y UX tanto en Aplicaciones Mobile,
            Aplicaciones Webs y Juegos.
            <br />
            Me considero una persona Responsable, Dinámica y Social, con buena
            capacidad para trabajar en equipo y gestionar proyectos.
            <br />
            <br />
          </P>
          <SimpleGrid columns={[1, 2, 2]} align="center">
            <Box>
              <Heading as="h3" variant="skills">
                Lenguajes
              </Heading>
              <p className="ls">
                Java, Swift, Python <br /> HTML, CSS, <br />
                JS, MySql, <br /> PHP, Django, <br />
                Laravel, Next JS
              </p>
            </Box>
            <Box>
              <Heading as="h3" variant="skills">
                Software
              </Heading>
              <p className="ls">
                VS Code, Android Studio, <br /> ACL Analytics, XCode, Postman,{' '}
                <br />
                Adobe Illustrator, Adobe XD, <br /> Unity Engine, Packet Tracer,
                Autodesk Maya, VM Virtual Box, <br />
                VMWare, Office 365
              </p>
            </Box>
          </SimpleGrid>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Curriculum
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
            my={6}
          />
          <Link
            maxWidth="50%"
            ml="25%"
            href="/files/CV_Diego_Muñoz_Herranz.pdf"
            alt="CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              maxWidth="50%"
              mt={5}
              className="cv_image"
              display="inline-block"
              src="/images/Diego Muñoz CV.png"
              alt="CV Image"
            />
          </Link>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Contacto
          </Heading>
          <Divider
            borderColor={useColorModeValue('#779ECB', '#f3a269')}
            my={6}
          />
          <SimpleGrid columns={[1, 2, 2]}>
            <List mt={2}>
              <ListItem>
                <Link href="https://github.com/diego-tech" target="_blank">
                  <Button
                    variant="ghost"
                    color="linkColor"
                    leftIcon={<Icon as={IoLogoGithub} />}
                  >
                    GitHub
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/diego-mu%C3%B1oz-herranz-b03a42182/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    color="linkColor"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                  >
                    Linkedin
                  </Button>
                </Link>
              </ListItem>
            </List>
            <List mt={2}>
              <ListItem>
                <Link href="mailto:diego171200@gmail.com">
                  <Button
                    variant="ghost"
                    color="linkColor"
                    leftIcon={<Icon as={IoMailSharp} />}
                  >
                    diego171200@gmail.com
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="tel:+34633543240">
                  <Button
                    variant="ghost"
                    color="linkColor"
                    leftIcon={<Icon as={IoCallSharp} />}
                  >
                    +34 633 54 32 40
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SimpleGrid>
        </Section>
      </Layout>
    </Box>
  )
}

export default IndexPage
