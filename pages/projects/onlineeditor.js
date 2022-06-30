import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Heading,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Editor Online">
      <Container>
        <Title>
          Editor Web Online
          <Badge
            bgColor={useColorModeValue('#779ECB', '#f3a269')}
            color={useColorModeValue('white', 'black')}
            ml={2}
            mb={1}
          >
            {' '}
            2020{' '}
          </Badge>
        </Title>
        <P>
          Editor de código HTML, CSS y JavaScript Online. Es un proyecto
          realizado en HTML y JavaScript utilizando Vite como empaquetador y
          librerías externas como Split-Grid y Js-Base64. Además el editor
          incluye autocompletado ya que utilizamos Monaco Editor la parte en la
          que se programa.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Código</Meta>
            <Link
              href="https://github.com/diego-tech/Editor-Online"
              target="_blank"
            >
              Código GitHub <ExternalLinkIcon mx="2px" mb="4px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Windows/MacOs/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript, Vite</span>
          </ListItem>
        </List>
        <Heading as="h3" variant="section-title">
          Multimedia
        </Heading>
        <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />
        <ProjectImage
          src="/images/projects/onlineditor/1.png"
          alt="Online Editor"
        />
        <ProjectImage
          src="/images/projects/onlineditor/2.png"
          alt="Online Editor"
        />
        <ProjectImage
          src="/images/projects/onlineditor/3.png"
          alt="Online Editor"
        />
      </Container>
    </Layout>
  )
}

export default Work
