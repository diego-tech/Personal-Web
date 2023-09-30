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
import thumbSports4All from '../public/images/projects/sports4all/thumbsport.png'
import thumbBreastCancerTFM from '../public/images/projects/breastcancertfm/thumbbreastcancer.png'

const Projects = () => {
    return (
        <Layout title="Proyectos">
            <Box>
                <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    Proyectos
                </Heading>
                <Divider
                    borderColor={useColorModeValue('#779ECB', '#f3a269')}
                    my={6}
                />
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <ProjectGridItem id="breastcancertfm" title="Breast Cancer TFM" thumbnail={thumbBreastCancerTFM}>
                            Clasificación de Cáncer de Mama de tipo Carcinoma Ductal Invasivo
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <ProjectGridItem id="sports4all" title="Sports4All" thumbnail={thumbSports4All}>
                            Automatización y Gestión de Centros Deportivos
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <ProjectGridItem id="cesfuencarral" title="Web Ces Fuencarral" thumbnail={thumbCesFuencarral}>
                            Reinterpretación de la página web del Centro
                            de Estudios Superiore Ces Fuencarral
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <ProjectGridItem id="securitysystem" title="Sistema de Seguridad" thumbnail={thumbSecuritySystem}>
                            Sistema de Seguridad Android, conectado a una API.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <ProjectGridItem id="onlineeditor" title="Editor Online" thumbnail={thumbOnlineEditor}>
                            Editor HTML, CSS y JavaScript Online
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <ProjectGridItem id="passwordmanager" title="Gestor de Usuarios" thumbnail={thumbPasswordManager}>
                            Simple Gestor de Usuarios realizado con Java
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Box>
        </Layout>
    )
}

export default Projects