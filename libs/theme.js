import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#EFDFAD', '#20202c')(props),
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
            'page-title': {
                fontFamily: "'Space Mono'",
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#324F99', '#DCB664')(props),
            textUnderlineOffset:2
        })
    },

}

const fonts = {
    body: "'Space Mono'",
}

const colors = {
    linkColor: mode('#4368C6', '#DCB664'),
    grassTeal: '#88C5CC'
}

const config = {
    inititalColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, 
    styles, 
    components,
    colors, 
    fonts
})

export default theme