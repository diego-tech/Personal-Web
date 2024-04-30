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
            ¡Hola! Soy Diego, un apasionado desarrollador de software y entusiasta de la tecnología.
            Mi viaje en el mundo de las nuevas tecnologías comenzó en 2014,
            y desde entonces, no he dejado de aprender y disfrutar de este emocionante universo.
            <br />
            <br />
            Cuento con una sólida formación académica que incluye un Grado Superior en Desarrollo de Aplicaciones
            Multiplataforma, obtenido entre 2020 y 2022, y un Grado Superior en Sistemas
            Microinformáticos y Redes, que completé de 2018 a 2020.
            Además, amplié mis conocimientos y habilidades realizando un Máster en Inteligencia
            Artificial y Data Science en la Universidad Europea de Madrid.
            <br />
            En mi búsqueda continua de conocimiento, actualmente estoy embarcado en un nuevo
            desafío: estoy estudiando el Grado en Matemática Computacional.
            <br />
            <br />
            Me considero una persona responsable, dinámica y social.
            Tengo la capacidad de adaptarme rápidamente a las diferentes condiciones y desafíos
            que se me presenten. Además, disfruto trabajando en equipo y colaborando en proyectos
            que requieren soluciones creativas.
            <br />
            <br />
            Mi objetivo es contribuir al avance tecnológico y al desarrollo de soluciones
            innovadoras que tengan un impacto positivo en la sociedad.
            Siempre estoy abierto a nuevas oportunidades y
            desafíos emocionantes en el mundo de la tecnología.
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
          <BioSection m={6}>
            <BioYear>2022 - Sep</BioYear>
            Con la idea de avanzar en mi carrera profesional dejo la anterior empresa y
            comienzo a trabajar como Junior IT Audit en KPMG, también empiezo a introducirme en el
            Data Science y Estudio un Máster en Inteligencia Artificial y Data Science en la
            Universidad Europea de Madrid.
          </BioSection>
          <BioSection m={6}>
            <BioYear>2023</BioYear>
            Continúo mis andaduras en KPMG y tras la finalización del máster y de
            este tiempo tomo la decisión de comenzar el Grado en Matemática Computacional en
            UNIR (Universidad Internacional de la Rioja)
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
            Como profesional, he adquirido una amplia gama de competencias que
            incluyen el desarrollo de aplicaciones multiplataforma con experiencia sólida en la
            creación de aplicaciones que funcionan en diversas plataformas para abordar las necesidades
            cambiantes del mercado, habilidades en el diseño y construcción de robustos sistemas
            BackEnd para aplicaciones y servicios web, y experiencia en la planificación y configuración de
            infraestructuras de servidor para garantizar un rendimiento óptimo.
          </P>
          <Heading as="h3" variant="skills" align="center">
              Software y Lenguajes
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} align="center">
            <Box>
              <p className="ls">
                VS Code, Android Studio, <br /> ACL Analytics, XCode, Postman,{' '}
                 <br /> Alteryx Designer, Power BI <br /> Unity Engine, Packet Tracer, <br />
                Autodesk Maya, VM Virtual Box, 
              </p>
            </Box>
            <Box>
            <p className="ls">
                VMWare, Suite Microsoft, <br />
                Suite Adobe, <br /> Azure Databricks
                Java, <br/> Swift, Python, HTML, CSS, <br />
                JS, MySql, PHP, Django, <br />
                Laravel, Next JS
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