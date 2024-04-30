import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react"

const Logo = () => {
    return (
        <Link href="/" passHref>
            <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily="Space Mono"
                fontSize="20"
                fontWeight="bold">
                Diego Muñoz Herranz
            </Text>
        </Link>
    )
}

export default Logo