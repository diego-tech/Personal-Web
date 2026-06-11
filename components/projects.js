import React from 'react';

import {
    Box,
    Flex,
    Heading,
    Divider,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ProjectGridItem } from './grid-item';

import thumbCesFuencarral from '../public/images/projects/cesfuencarral/thumbces.png';
import thumbPasswordManager from '../public/images/projects/passwordmanager/thumbpassword.png';
import thumbSecuritySystem from '../public/images/projects/securitysystem/thumbsystem.png';
import thumbSports4All from '../public/images/projects/sports4all/thumbsport.png';
import thumbBreastCancerTFM from '../public/images/projects/breastcancertfm/thumbbreastcancer.png';

const projectList = [
    {
        id: 'breastcancertfm',
        title: 'Breast Cancer TFM',
        thumbnail: thumbBreastCancerTFM,
        description: 'Clasificación de Cáncer de Mama de tipo Carcinoma Ductal Invasivo'
    },
    {
        id: 'sports4all',
        title: 'Sports4All',
        thumbnail: thumbSports4All,
        description: 'Automatización y Gestión de Centros Deportivos'
    },
    {
        id: 'cesfuencarral',
        title: 'Web Ces Fuencarral',
        thumbnail: thumbCesFuencarral,
        description: 'Reinterpretación de la página web del Centro de Estudios Superiores Ces Fuencarral'
    },
    {
        id: 'securitysystem',
        title: 'Sistema de Seguridad',
        thumbnail: thumbSecuritySystem,
        description: 'Sistema de Seguridad Android, conectado a una API.'
    },
    {
        id: 'passwordmanager',
        title: 'Gestor de Usuarios',
        thumbnail: thumbPasswordManager,
        description: 'Simple Gestor de Usuarios realizado con Java'
    }
];

const Projects = () => {
    const scrollContainerRef = React.useRef(null);

    const scrollByAmount = direction => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: direction * 344, behavior: 'smooth' });
        }
    };

    return (
        <Box>
            <Flex align="center" justify="space-between">
                <Heading as="h2" variant="section-title" fontSize={20}>
                    Proyectos
                </Heading>
                <Box display={{ base: 'none', md: 'block' }}>
                    <IconButton
                        icon={<ChevronLeftIcon />}
                        aria-label="Desplazar proyectos hacia la izquierda"
                        size="sm"
                        variant="outline"
                        mr={2}
                        onClick={() => scrollByAmount(-1)}
                    />
                    <IconButton
                        icon={<ChevronRightIcon />}
                        aria-label="Desplazar proyectos hacia la derecha"
                        size="sm"
                        variant="outline"
                        onClick={() => scrollByAmount(1)}
                    />
                </Box>
            </Flex>
            <Divider
                borderColor={useColorModeValue('#779ECB', '#f3a269')}
            />

            <Flex
                ref={scrollContainerRef}
                direction={{ base: 'column', md: 'row' }}
                overflowX={{ md: 'auto' }}
                gap={6}
                py={4}
                px={1}
                sx={{
                    scrollSnapType: { md: 'x proximity' },
                    '& > *': { scrollSnapAlign: 'start' }
                }}
            >
                {projectList.map(project => (
                    <Box
                        key={project.id}
                        minW={{ md: '320px' }}
                        maxW={{ md: '320px' }}
                        flexShrink={0}
                    >
                        <ProjectGridItem
                            id={project.id}
                            title={project.title}
                            thumbnail={project.thumbnail}
                        >
                            {project.description}
                        </ProjectGridItem>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Projects;
