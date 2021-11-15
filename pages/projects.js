import {
    Container,
    Box,
    Heading,
    SimpleGrid,
    Divider,
    useColorModeValue
} from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'
import Head from 'next/head'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Projects = () => {
    return (
        <Box>
            <Head>
                <title>Diego Muñoz - Proyectos</title>
            </Head>
            <Heading as="h3" variant="section-title" fontSize={20} mb={3}>
                Projects
            </Heading>
            <Divider
                borderColor={useColorModeValue('#324F99', '#DCB664')}
                my={6}
            />
            <SimpleGrid columns={[1,2,2]} gap={6}>
            <Section>
            {/*
                    <ProjectGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A Markdown note-taking app with 100+ plugins, cross-platform and
                        encrypted data sync support
                    </ProjectGridItem> */}
                </Section>
            </SimpleGrid>
        </Box>
    )
}

export default Projects