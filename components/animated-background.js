import { Box, useColorModeValue, usePrefersReducedMotion } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const driftA = keyframes`
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(9vw, 7vh) scale(1.15); }
`

const driftB = keyframes`
    from { transform: translate(0, 0) scale(1.1); }
    to   { transform: translate(-8vw, -6vh) scale(0.95); }
`

const AnimatedBackground = () => {
    const prefersReducedMotion = usePrefersReducedMotion()
    // Manchas de luz con los acentos del tema, lo bastante tenues
    // para no competir con el contenido en ningún modo.
    const glowA = useColorModeValue('rgba(119, 158, 203, 0.22)', 'rgba(243, 162, 105, 0.10)')
    const glowB = useColorModeValue('rgba(243, 162, 105, 0.12)', 'rgba(119, 158, 203, 0.10)')

    return (
        <Box
            position="fixed"
            inset={0}
            zIndex={-1}
            overflow="hidden"
            pointerEvents="none"
            aria-hidden="true"
        >
            <Box
                position="absolute"
                top="-22vw"
                left="-12vw"
                w="60vw"
                h="60vw"
                minW="420px"
                minH="420px"
                borderRadius="full"
                bg={`radial-gradient(circle, ${glowA} 0%, transparent 65%)`}
                animation={prefersReducedMotion ? undefined : `${driftA} 45s ease-in-out infinite alternate`}
            />
            <Box
                position="absolute"
                bottom="-25vw"
                right="-14vw"
                w="55vw"
                h="55vw"
                minW="380px"
                minH="380px"
                borderRadius="full"
                bg={`radial-gradient(circle, ${glowB} 0%, transparent 65%)`}
                animation={prefersReducedMotion ? undefined : `${driftB} 55s ease-in-out infinite alternate`}
            />
        </Box>
    )
}

export default AnimatedBackground
