import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
    render () {
        return(
            <Html lang="en">
                <Head>
                    {/* Añade la etiqueta canonical aquí */}
                    <link rel="canonical" href="https://www.dmunoz.dev/" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}