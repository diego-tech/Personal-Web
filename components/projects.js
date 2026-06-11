import {
    Box,
    Heading,
    SimpleGrid,
    Divider,
    useColorModeValue
} from '@chakra-ui/react';
import { ProjectGridItem } from './grid-item';
import Section from './section';

import thumbCesFuencarral from '../public/images/projects/cesfuencarral/thumbces.png';
import thumbPasswordManager from '../public/images/projects/passwordmanager/thumbpassword.png';
import thumbSecuritySystem from '../public/images/projects/securitysystem/thumbsystem.png';
import thumbSports4All from '../public/images/projects/sports4all/thumbsport.png';
import thumbBreastCancerTFM from '../public/images/projects/breastcancertfm/thumbbreastcancer.png';

const Projects = () => {
    return (
        <Box>
            <Heading as="h2" variant="section-title" fontSize={20} mb={4}>
                Proyectos
            </Heading>
            <Divider
                borderColor={useColorModeValue('#779ECB', '#f3a269')}
            />

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} my={3}>
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
                <Section delay={0.2}>
                    <ProjectGridItem id="cesfuencarral" title="Web Ces Fuencarral" thumbnail={thumbCesFuencarral}>
                        Reinterpretación de la página web del Centro
                        de Estudios Superiores Ces Fuencarral
                    </ProjectGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProjectGridItem id="securitysystem" title="Sistema de Seguridad" thumbnail={thumbSecuritySystem}>
                        Sistema de Seguridad Android, conectado a una API.
                    </ProjectGridItem>
                </Section>
                <Section delay={0.3}>
                    <ProjectGridItem id="passwordmanager" title="Gestor de Usuarios" thumbnail={thumbPasswordManager}>
                        Simple Gestor de Usuarios realizado con Java
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Box>
    );
};

export default Projects;
