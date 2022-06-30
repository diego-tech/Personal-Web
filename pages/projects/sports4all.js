import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="sports4all">
      <Container>
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
          DEFINICION PROYECTO
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
            <span>Swift, Laravel, Python, Flask, MySql</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work