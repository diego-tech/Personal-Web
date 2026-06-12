import { Global } from "@emotion/react"
import { useColorModeValue } from "@chakra-ui/react"

const GlobalStyles = () => (
    <Global
        styles={`
            html {
                scroll-behavior: smooth;
            }

            /* Quitar el anillo de foco solo en interacción con ratón,
               manteniéndolo visible para navegación por teclado (WCAG 2.4.7) */
            *:focus:not(:focus-visible) {
                outline: none;
                box-shadow: none;
            }

            *:focus-visible {
                outline: 2px solid ${useColorModeValue('#779ECB', '#f3a269')};
                outline-offset: 2px;
            }

            /* Scroll Bar Style */

            ::-webkit-scrollbar {
                width: 5px;
                background: transparent;
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

            .expItem {
                margin-top: 1.5em;
                padding-left: 16px;
                border-left: 2px solid ${useColorModeValue('#5A82B855', '#f3a26955')};
                transition: border-color 0.3s ease;
            }

            .expItem:hover {
                border-left-color: ${useColorModeValue('#5A82B8', '#f3a269')};
            }

            .expItem h3 {
                font-weight: 500;
                color: ${useColorModeValue('#18181a', '#f9fafb')};
                text-decoration: underline;
                text-underline-offset: 5px;
            }

            .expItem a {
                color: ${useColorModeValue('#18181a', '#f9fafb')};
            }

            .expItem a:hover {
                text-decoration: underline;
            }

            .expItem h3, .expItem h4 {
                margin-top: 0px;
                margin-bottom: 0px;
            }

            .expItem h4 {
                color: ${useColorModeValue('#18181a', '#f9fafb')};
                font-weight: lighter;
            }

            .expItem header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 4px;
            }

            .expItem time {
                color: ${useColorModeValue('#555', '#f9fafb')};
                font-size: 0.85rem;
                min-width: 102px;
                cursor: default;
            }

            .expItem footer {
                color: ${useColorModeValue('#555', '#f9fafb')};
            }

            .expItem footer p {
                font-size: smaller;
            }

            .rssFooter {
                color: #555;
                font-size: 0.65rem;
                display: flex;
                gap: 4px;
                margin-top: 16px;
                justify-content: center;
                align-items: center;
            }

            @media (min-width: 48em) {
                .rssFooter {
                    justify-content: flex-start;
                }
            }

            .rssLink {
                color: #777;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid ${useColorModeValue('#e4e4e7', '#3f3f46')};
                padding: 4px;
                height: 32px;
                width: 32px;
                border-radius: 6px;
                transition: all 0.3s ease;
            }

            .rssLink:hover {
                background: ${useColorModeValue('#eee', '#27272a')};
                border-color: ${useColorModeValue('#5A82B8', '#f3a269')};
                transform: translateY(-2px);
            }

            .rssSvg {
                color: ${useColorModeValue('#18181a', '#f9fafb')};
            }

            .skillsUl {    
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                padding-inline-start: 0px;
            }

            .skillsLi {
                align-items: center;
                background: ${useColorModeValue('#ffffff', '#ffffff0a')};
                border-radius: 6px;
                color: ${useColorModeValue('#18181a', '#f9fafb')};
                display: flex;
                font-weight: 500;
                gap: 10px;
                padding: 0.2rem 0.6rem;
                height: 40px;
                border: 1px solid ${useColorModeValue('#d4d4d8', '#3f3f46')};
                transition: all 0.2s ease;
            }

            .skillsLi:hover {
                border-color: ${useColorModeValue('#5A82B8', '#f3a269')};
                transform: translateY(-2px);
            }
        `}
    />
)

export default GlobalStyles