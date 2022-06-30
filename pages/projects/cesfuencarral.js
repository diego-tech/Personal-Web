import { 
    Container, 
    Badge, 
    Link, 
    List, 
    ListItem, 
    useColorModeValue 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Ces Fuencarral">
            <Container>
                <Title>
                    Web Ces Fuencarral 
                    <Badge 
                        bgColor={useColorModeValue('#779ECB', '#f3a269')}
                        color={useColorModeValue('white', 'black')}
                        ml={2}
                        mb={1}> 2020 </Badge>
                </Title>
                <P>
                    Aplicación Web que corresponde al proyecto de final de curso del 
                    CFGM de Sistemas Microinformáticos y Redes. Es una aplicacición realizada
                    en Python y su framework web Django que consiste en la reinterpretación del
                    sitio web del centro de estudios y una plataforma en la que los alumnos pueden
                    subir consultas y conversar con profesores y otros alumnos.
                </P>
                <List my={4}>
                    <ListItem>
                        <Meta>Código</Meta>
                        <Link 
                            href="https://github.com/diego-tech/cesfuencarral" 
                            target="_blank">
                            Código GitHub <ExternalLinkIcon mx="2px" mb="4px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataforma</Meta>
                        <span>Windows/MacOs/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Django, SASS, JS</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/cesfuencarral/1.png" alt="Ces Fuencarral" />
                <ProjectImage src="/images/projects/cesfuencarral/2.png" alt="Ces Fuencarral" />
                <ProjectImage src="/images/projects/cesfuencarral/3.png" alt="Ces Fuencarral" />
                <ProjectImage src="/images/projects/cesfuencarral/4.png" alt="Ces Fuencarral" />
                <ProjectImage src="/images/projects/cesfuencarral/5.png" alt="Ces Fuencarral" />
                <ProjectImage src="/images/projects/cesfuencarral/6.png" alt="Ces Fuencarral" />
            </Container>
        </Layout>
    )
}

export default Work