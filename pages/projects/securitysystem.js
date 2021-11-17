import { 
    Container, 
    Badge, 
    Link, 
    List, 
    ListItem, 
    useColorModeValue, 
    SimpleGrid 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Sistema de Seguridad">
            <Container>
                <Title>
                    Sistema de Seguridad
                    <Badge 
                        bgColor={useColorModeValue('#324F99', '#DCB664')}
                        color={useColorModeValue('white', 'black')}
                        ml={2}
                        mb={1}> 2021 </Badge>
                </Title>
                <P>
                    Aplicación Android realizada en Java, consiste en una aplicación que se conecta a una API
                    que está conectada a un sistema de seguridad. Desde nuestra aplicación podremos comprobar el 
                    estado del sistema de seguridad y cambiarlo, también podremos ver el historial de los estados.               
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Código</Meta>
                        <Link 
                            href="https://github.com/diego-tech/Security-System" 
                            target="_blank">
                            Código GitHub <ExternalLinkIcon mx="2px" mb="4px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Plataforma</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java</span>
                    </ListItem>
                </List>

                <SimpleGrid columns={2} gap={5}>
                    <ProjectImage  src="/images/projects/securitysystem/1.png" alt="Sistema de Seguridad" />
                    <ProjectImage src="/images/projects/securitysystem/2.png" alt="Sistema de Seguridad" />
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <ProjectImage  src="/images/projects/securitysystem/5.png" alt="Sistema de Seguridad" />
                    <ProjectImage src="/images/projects/securitysystem/4.png" alt="Sistema de Seguridad" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work