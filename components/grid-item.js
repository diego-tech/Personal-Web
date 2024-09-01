import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy" />
            <LinkOverlay href={href} target="_blank">
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
    <Box 
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center" 
        textAlign="center"
        _hover={{
            '.grid-item-thumbnail': {
                transform: 'scale(1.1)', // Escala la imagen al 110%
                transition: 'transform 0.3s ease-in-out', // Transición suave
            }
        }}>
        <NextLink href={`/projects/${id}`} passHref>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <Text
                    textDecoration="underline"
                    textUnderlineOffset={5}
                    mt={3}
                    mb={3}
                    fontSize={20}
                >
                    {title}
                </Text>
                <Text
                    fontSize={14}
                    overflowWrap={'break-word'}
                    whiteSpace={"normal"}>
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
);

export const GridItemsStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
            transition: all 300ms;
        }
    `} />
)