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

            .expList {
                margin-top: 1em;
                display: flex;
                flex-direction: column;
                gap: 32px;
                list-style: none;
            }

            .expList article h3 {
                font-weight: 500;
                color: ${useColorModeValue('#18181a', '#f9fafb')};
                text-decoration: underline;
                text-underline-offset: 5px;
            }

            .expList article a {
                color: ${useColorModeValue('#18181a', '#f9fafb')};
            }

            .expList article a:hover {
                text-decoration: underline;
            }

            .expList article h3, h4 {
                margin-top: 0px;
                margin-bottom: 0px;
            }

            .expList article h4 {
                color: ${useColorModeValue('#18181a', '#f9fafb')};
                font-weight: lighter;
            }

            .expList header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 4px;
            }

            .expList time {
                color: ${useColorModeValue('#555', '#f9fafb')};
                font-size: 0.85rem;
                min-width: 102px;
                cursor: default;
            }

            .expList footer {
                color: ${useColorModeValue('#555', '#f9fafb')};
            }

            .expList footer p {
                font-size: smaller;
            }

            .rssFooter {
                color: #555;
                font-size: 0.65rem;
                display: flex;
                gap: 4px;
                margin-top: 8px;
                justify-content: center;
                align-items: center;
            }

            .rssLink {
                color: #777;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #eee;
                padding: 4px;
                height: 32px;
                width: 32px;
                border-radius: 6px;
                transition: all 0.3s ease;
            }

            .rssLink:hover {
                background: #eee;
                border: 1px solid #ddd;
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
                background: #eee;
                border-radius: 6px;
                color: black;
                display: flex;
                font-weight: 500;
                gap: 10px;
                padding: 0.2rem 0.6rem;
                height: 40px;
                border: 1px solid #1b232c;
            }
        `}
    />
)

export default GlobalStyles