import {
    Box,
    Heading,
    SimpleGrid,
    Divider,
    useColorModeValue
} from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbCesFuencarral from '../public/images/projects/cesfuencarral/thumbces.png'
import thumbOnlineEditor from '../public/images/projects/onlineditor/thumbonlineeditor.png'
import thumbPasswordManager from '../public/images/projects/passwordmanager/thumbpassword.png'
import thumbSecuritySystem from '../public/images/projects/securitysystem/thumbsystem.png'

const Projects = () => {
    return (
        <Layout title="Proyectos">
            <Box>
                <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    Proyectos
                </Heading>
                <Divider
                    borderColor={useColorModeValue('#324F99', '#DCB664')}
                    my={6}
                />
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <ProjectGridItem id="cesfuencarral" title="Web Ces Fuencarral" thumbnail={thumbCesFuencarral}>
                            Reinterpretación de la página web del Centro 
                            de Estudios Superiore Ces Fuencarral
                        </ProjectGridItem> 
                    </Section>
                    <Section delay={0.1}>
                        <ProjectGridItem id="onlineeditor" title="Editor Online" thumbnail={thumbOnlineEditor}>
                            Editor HTML, CSS y JavaScript Online
                        </ProjectGridItem> 
                    </Section>
                </SimpleGrid>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <ProjectGridItem id="passwordmanager" title="Gestor de Usuarios" thumbnail={thumbPasswordManager}>
                            Simple Gestor de Usuarios realizado con Java
                        </ProjectGridItem> 
                    </Section>
                    <Section delay={0.1}>
                        <ProjectGridItem id="securitysystem" title="Sistema de Seguridad" thumbnail={thumbSecuritySystem}>
                            Reinterpretación de la página web del Centro 
                            de Estudios Superiore Ces Fuencarral
                        </ProjectGridItem> 
                    </Section>
                </SimpleGrid>
            </Box>
        </Layout>
    )
}

export default Projects