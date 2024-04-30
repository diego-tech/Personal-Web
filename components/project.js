import NextLink from 'next/link'
import { 
    Heading, 
    Box, 
    Image, 
    Link, 
    Badge,
    Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/projects">
            <Link>Proyectos</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading fontFamily="Space Mono" display='inline-block' as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const ProjectImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="teal" mr={2}>
        {children}
    </Badge>
)

export const UnderlinedText = ({ children }) => {
    return (
      <Text
        display="inline-block"
        textDecoration="underline"
        fontWeight="bold"
      >
        {children}
      </Text>
    );
  };