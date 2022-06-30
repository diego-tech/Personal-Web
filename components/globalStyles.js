import { Global } from "@emotion/react"
import { useColorModeValue } from "@chakra-ui/react"

const GlobalStyles = () => (
    <Global
        styles={`
            *,*:focus,*:hover{
                outline:none;
                box-shadow: none;
            }

            /* Remove Focus */
            *:focus {
                box-shadow: none !important;
            }

            /* Scroll Bar Style */

            ::-webkit-scrollbar {
                width: 5px;
            }

            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px #f1f1f1;
            }

            ::-webkit-scrollbar-thumb {
                background: ${useColorModeValue('#18181a', '#f9fafb')};
                border-radius: 10px;
            }

            /* CV Hover Style */

            .cv_image {
                transition: all 300ms;
            }
            .cv_image:hover {
                transform: scale(1.1, 1.1);
            }

            /* Language & Software */
            .ls{
                line-height: 30px;
            }
        `}
    />
)

export default GlobalStyles