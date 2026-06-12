import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <img
                src={thumbnail.src ?? thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                loading="lazy" />
            <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
                <Text mt={2}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>
                {children}
            </Text>
        </LinkBox>
    </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
    <LinkBox
        as="article"
        h="100%"
        display="flex"
        flexDirection="column"
        borderWidth="1px"
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
        borderRadius="xl"
        overflow="hidden"
        bg={useColorModeValue('white', 'whiteAlpha.50')}
        transition="all 0.3s ease"
        _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'lg',
            borderColor: useColorModeValue('#5A82B8', '#f3a269'),
            '.grid-item-thumbnail': {
                transform: 'scale(1.05)'
            }
        }}>
        <Box overflow="hidden">
            <img
                src={thumbnail.src ?? thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                loading="lazy"
            />
        </Box>
        <Box p={4} textAlign="center" flexGrow={1}>
            <LinkOverlay as={NextLink} href={`/projects/${id}`}>
                <Text fontSize={18} fontWeight="bold">
                    {title}
                </Text>
            </LinkOverlay>
            <Text
                fontSize={14}
                mt={2}
                overflowWrap={'break-word'}
                whiteSpace={"normal"}>
                {children}
            </Text>
        </Box>
    </LinkBox>
);

export const GridItemsStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            width: 100%;
            height: auto;
            transition: transform 300ms ease;
        }
    `} />
)
