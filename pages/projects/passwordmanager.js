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
    <Layout title="Administrador de Usuarios">
      <Container>
        <Title>
          Administrador de Usuarios
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
          Aplicación de consola de comandos realizada con Java. Es un simple
          gestor de usuarios en el que podremos Registrar, Modificar y Eliminar
          usuarios, además de listar todos los usuarios, un usuario concreto o
          todos los usuarios asociados a un tipo de cuenta.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Código</Meta>
            <Link
              href="https://github.com/diego-tech/Administrador-de-Usuarios"
              target="_blank"
            >
              Código GitHub
              <ExternalLinkIcon mx="2px" mb="4px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Windows/MacOs/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
        </List>
        <Heading as="h3" variant="section-title">
          Multimedia
        </Heading>
        <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />
        <ProjectImage
          src="/images/projects/passwordmanager/1.png"
          alt="User Manager"
        />
        <ProjectImage
          src="/images/projects/passwordmanager/2.png"
          alt="User Manager"
        />
        <ProjectImage
          src="/images/projects/passwordmanager/3.png"
          alt="User Manager"
        />
        <ProjectImage
          src="/images/projects/passwordmanager/4.png"
          alt="User Manager"
        />
      </Container>
    </Layout>
  )
}

export default Work
