import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#f9fafb', '#18181a')(props),
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                fontSize: 20,
                marginTop: 3,
                marginBottom: 2,
                textTransform: "uppercase",
                fontFamily: "'Space Mono'",
            },
            'page-title': {
                fontFamily: "'Space Mono'",
            },
            'skills': {
                fontSize: 20,
                marginTop: 3,
                marginBottom: 2,
                textDecoration: 'underline',
                textUnderlineOffset: 4,
                textTransform: "uppercase",
                fontFamily: "'Space Mono'",
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#779ECB', '#f3a269')(props),
            textUnderlineOffset: 2
        })
    },
}

const fonts = {
    body: "'Space Mono'",
}

const colors = {
    linkColor: mode('#779ECB', '#f3a269'),
}

const config = {
    inititalColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    fonts,
    config, 
    styles, 
    components,
    colors, 
})

export default theme