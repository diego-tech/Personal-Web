import { motion } from "framer-motion"
import Head from 'next/head'
import { GridItemsStyle } from "../grid-item"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
    const t = `${title} - Diego Muñoz Herranz`
    
    return (<motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}>
        <>
            {title && (<Head>
                <title>{t}</title>
            </Head>
            )}
            {children}
            <GridItemsStyle />
        </>
    </motion.article>
    )
}

export default Layout