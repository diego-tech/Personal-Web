import { useEffect, useState } from 'react'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useTranslation } from '../libs/i18n'

const SCROLL_THRESHOLD = 400

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <IconButton
            aria-label={t.nav.backToTop}
            title={t.nav.backToTop}
            icon={<ArrowUpIcon />}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            position="fixed"
            bottom={{ base: 4, md: 8 }}
            right={{ base: 4, md: 8 }}
            zIndex={3}
            borderRadius="full"
            boxShadow="md"
            bg={useColorModeValue('#5A82B8', '#f3a269')}
            color={useColorModeValue('white', '#18181a')}
            _hover={{ opacity: 0.85 }}
            opacity={visible ? 1 : 0}
            pointerEvents={visible ? 'auto' : 'none'}
            transform={visible ? 'translateY(0)' : 'translateY(10px)'}
            transition="opacity 0.3s ease, transform 0.3s ease, background 0.2s ease"
        />
    )
}

export default ScrollToTopButton
