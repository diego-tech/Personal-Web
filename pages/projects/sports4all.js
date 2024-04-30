import {
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="sports4all">
      <Title>
        Sports4All
        <Badge
          bgColor={useColorModeValue('#779ECB', '#f3a269')}
          color={useColorModeValue('white', 'black')}
          ml={2}
          mb={1}
        >
          {' '}
          2022{' '}
        </Badge>
      </Title>
      <P>
        Sports4All es un proyecto realizado como Trabajo de Fin de Grado,
        consiste en un sistema de Gestión y Automatización para los centros
        deportivos de España por la cual podremos realizar, reservas de
        espacios, inscripciones a eventos, ser social con gente con tus mismas
        aficiones. Además con este sistema el usuario podrá acceder al espacio
        sin tener que pasar por ningún intermediario gracias al sistema de
        validaciones por código QR.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Código</Meta>
          <Link
            href="https://github.com/diego-tech/Sport4All-iOS"
            target="_blank"
          >
            IOS APP
            <ExternalLinkIcon mx="2px" mb="4px" />
          </Link>
          ,
          <Link
            href="https://github.com/diego-tech/Sport4All-API"
            target="_blank"
            ml={4}
          >
            API
            <ExternalLinkIcon mx="2px" mb="4px" />
          </Link>
          ,
          <Link
            href="https://github.com/diego-tech/Sports4All-QR"
            target="_blank"
            ml={4}
          >
            QR Code Verifier
            <ExternalLinkIcon mx="2px" mb="4px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>IOS, Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Swift (Alamofire, FSCalendar), Laravel, Python, Flask, MySql
          </span>
        </ListItem>
      </List>
      <Heading as="h3" variant="section-title">
        Multimedia
      </Heading>
      <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />
      <video autoPlay controls>
        <source src="/images/projects/sports4all/overview.mp4" />
      </video>
      <br />
      <video controls>
        <source src="/images/projects/sports4all/QR.mp4" />
      </video>
      <SimpleGrid columns={2} gap={5}>
        <ProjectImage
          src="/images/projects/sports4all/1.png"
          alt="Sports4All"
        />
        <ProjectImage
          src="/images/projects/sports4all/2.png"
          alt="Sports4All"
        />
      </SimpleGrid>
      <ProjectImage
        src="/images/projects/sports4all/5.png"
        alt="Sports4All"
      />
    </Layout>
  )
}

export default Work