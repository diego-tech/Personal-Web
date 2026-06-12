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
import { useTranslation } from '../libs/i18n';

import thumbCesFuencarral from '../public/images/projects/cesfuencarral/thumbces.png';
import thumbPasswordManager from '../public/images/projects/passwordmanager/thumbpassword.png';
import thumbSecuritySystem from '../public/images/projects/securitysystem/thumbsystem.png';
import thumbSports4All from '../public/images/projects/sports4all/thumbsport.png';
import thumbBreastCancerTFM from '../public/images/projects/breastcancertfm/thumbbreastcancer.png';

const projectList = [
    { id: 'breastcancertfm', thumbnail: thumbBreastCancerTFM },
    { id: 'sports4all', thumbnail: thumbSports4All },
    { id: 'cesfuencarral', thumbnail: thumbCesFuencarral },
    { id: 'securitysystem', thumbnail: thumbSecuritySystem },
    { id: 'passwordmanager', thumbnail: thumbPasswordManager }
];

const Projects = () => {
    const { t } = useTranslation();
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
                    {t.projects.title}
                </Heading>
                <Box display={{ base: 'none', md: 'block' }}>
                    <IconButton
                        icon={<ChevronLeftIcon />}
                        aria-label={t.projects.scrollLeftAria}
                        size="sm"
                        variant="outline"
                        mr={2}
                        onClick={() => scrollByAmount(-1)}
                    />
                    <IconButton
                        icon={<ChevronRightIcon />}
                        aria-label={t.projects.scrollRightAria}
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
                            title={t.projectPages[project.id].title}
                            thumbnail={project.thumbnail}
                        >
                            {t.projects.descriptions[project.id]}
                        </ProjectGridItem>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Projects;
