import {
    Container,
    Box,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Projects = () => {
    return (
        <Box>
            <Heading as="h3" fontSize={20} mb={3}>
                Projects
            </Heading>
            <SimpleGrid columns={[1,2,2]} gap={6}>
            <Section>
                    <ProjectGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A Markdown note-taking app with 100+ plugins, cross-platform and
                        encrypted data sync support
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Box>
    )
}

export default Projects