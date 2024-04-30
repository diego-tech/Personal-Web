import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Layout from '../components/layouts/main'
import Fonts from "../components/fonts";
import theme from "../libs/theme";
import GlobalStyles from "../components/globalStyles";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <GlobalStyles />
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode="wait" initial={true} onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                    }
                }}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website