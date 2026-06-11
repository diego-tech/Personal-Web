import {
    Badge,
    Link,
    List,
    ListItem,
    useColorModeValue,
    Heading,
    Divider,
    UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta, UnderlinedText } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useTranslation } from '../../libs/i18n'

const Work = () => {
    const { t } = useTranslation()
    const project = t.projectPages.breastcancertfm

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
            <P>{project.milestonesIntro}</P>
            <UnorderedList>
                {project.milestones.map(milestone => (
                    <ListItem key={milestone.term}>
                        <UnderlinedText>{milestone.term}</UnderlinedText>: {milestone.text}
                    </ListItem>
                ))}
            </UnorderedList>
            <List my={4}>
                <ListItem>
                    <Meta>{project.reportLabel}</Meta>
                    <Link
                        href="/files/TFM_Memoria_Deteccion_Cancer_de_Mama_IDC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.reportLink}
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>{t.projectPage.code}</Meta>
                    <Link
                        href="https://github.com/diego-tech/TFM_Breast_Cancer_Classification"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Models Code
                        <ExternalLinkIcon mx="2px" mb="4px" />
                    </Link>
                    ,
                    <Link
                        href="https://github.com/diego-tech/TFM_Breast_Cancer_Classification_App"
                        target="_blank"
                        rel="noopener noreferrer"
                        ml={4}
                    >
                        Web APP
                        <ExternalLinkIcon mx="2px" mb="4px" />
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
            <ProjectImage
                src="/images/projects/breastcancertfm/thumbbreastcancer.png"
                alt={`${project.title} - 1`}
            />
            <ProjectImage
                src="/images/projects/breastcancertfm/Predict_1.png"
                alt={`${project.title} - 2`}
            />
            <ProjectImage
                src="/images/projects/breastcancertfm/Predict_2.png"
                alt={`${project.title} - 3`}
            />
        </Layout>
    )
}

export default Work
