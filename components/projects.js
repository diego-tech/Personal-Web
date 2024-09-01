import React from 'react'; // Añade esta línea

import {
    Box,
    Heading,
    SimpleGrid,
    Divider,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ProjectGridItem } from './grid-item';
import Section from './section';
import Layout from './layouts/article';

import thumbCesFuencarral from '../public/images/projects/cesfuencarral/thumbces.png';
import thumbPasswordManager from '../public/images/projects/passwordmanager/thumbpassword.png';
import thumbSecuritySystem from '../public/images/projects/securitysystem/thumbsystem.png';
import thumbSports4All from '../public/images/projects/sports4all/thumbsport.png';
import thumbBreastCancerTFM from '../public/images/projects/breastcancertfm/thumbbreastcancer.png';

const Projects = () => {
    const scrollContainerRef = React.useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <Layout title="Proyectos">
            <Box>
                <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    Proyectos
                </Heading>
                <Divider
                    borderColor={useColorModeValue('#779ECB', '#f3a269')}
                />

                <Box position="relative" my={3}>
                    <Box 
                        ref={scrollContainerRef} 
                        overflowX="auto" 
                        whiteSpace="nowrap" 
                        display="flex"
                    >
                        <Box minWidth="1000px" mr={6}>
                            <SimpleGrid columns={2}>
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
                        </Box>

                        <Box minWidth="1000px" mr={6}>
                            <SimpleGrid columns={2}>
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
                        </Box>

                        <Box minWidth="500px" mr={6}>
                            <SimpleGrid columns={1}>
                                <Section delay={0.1}>
                                    <ProjectGridItem id="passwordmanager" title="Gestor de Usuarios" thumbnail={thumbPasswordManager}>
                                        Simple Gestor de Usuarios realizado con Java
                                    </ProjectGridItem>
                                </Section>
                            </SimpleGrid>
                        </Box>
                    </Box>

                    <IconButton 
                        icon={<ChevronLeftIcon />} 
                        aria-label="Scroll Left" 
                        position="absolute" 
                        bottom="2%" 
                        left="10px" 
                        transform="translateY(-50%)" 
                        onClick={scrollLeft} 
                        zIndex="1" 
                        color={useColorModeValue("#f9fafb", "#18181a")}
                        backgroundColor={useColorModeValue("#18181a", "#f9fafb")}
                    />
                    <IconButton 
                        icon={<ChevronRightIcon />} 
                        aria-label="Scroll Right" 
                        position="absolute" 
                        bottom="2%"
                        right="10px" 
                        transform="translateY(-50%)" 
                        onClick={scrollRight} 
                        zIndex="1" 
                        color={useColorModeValue("#f9fafb", "#18181a")}
                        backgroundColor={useColorModeValue("#18181a", "#f9fafb")}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default Projects;
