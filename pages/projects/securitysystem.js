import {
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useTranslation } from '../../libs/i18n'

const Work = () => {
  const { t } = useTranslation()
  const project = t.projectPages.securitysystem

  return (
    <Layout title={project.layoutTitle}>
        <Title>
          {project.title}
          <Badge
            bgColor={useColorModeValue('#779ECB', '#f3a269')}
            color={useColorModeValue('white', 'black')}
            ml={2}
            mb={1}
          >
            {' '}
            {project.year}{' '}
          </Badge>
        </Title>
        <P>{project.intro}</P>
        <List my={4}>
          <ListItem>
            <Meta>{t.projectPage.code}</Meta>
            <Link
              href="https://github.com/diego-tech/Security-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projectPage.githubCode} <ExternalLinkIcon mx="2px" mb="4px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t.projectPage.platform}</Meta>
            <span>{project.platform}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.projectPage.stack}</Meta>
            <span>{project.stack}</span>
          </ListItem>
        </List>
        <Heading as="h2" variant="section-title">
          {t.projectPage.multimedia}
        </Heading>
        <Divider borderColor={useColorModeValue('#779ECB', '#f3a269')} my={6} />

        <SimpleGrid columns={2} gap={5}>
          <ProjectImage
            src="/images/projects/securitysystem/1.png"
            alt={`${project.title} - 1`}
          />
          <ProjectImage
            src="/images/projects/securitysystem/2.png"
            alt={`${project.title} - 2`}
          />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <ProjectImage
            src="/images/projects/securitysystem/5.png"
            alt={`${project.title} - 3`}
          />
          <ProjectImage
            src="/images/projects/securitysystem/4.png"
            alt={`${project.title} - 4`}
          />
        </SimpleGrid>
    </Layout>
  )
}

export default Work
