import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0, id }) => (
    <StyledDiv
        id={id}
        initial={{z: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1, delay}}
        sx={{ scrollMarginTop: '80px' }}
        mb={8}>
        {children}
    </StyledDiv>
)

export default Section
