import { createGlobalStyle } from "styled-components";
import { primaryTextColor, neutral0, primary } from "./colors";
import { footerHeight } from "./variables";

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    
    body {
        position: relative;
        padding-bottom: ${footerHeight};
        margin: 0;
        font-size: 1.8rem;
        min-height: 100vh;
        width: 100vw;
        color: ${primaryTextColor};
        background: ${neutral0};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Proza Libre', sans-serif;
        font-weight: 600;
    }

    a {
        color: ${primary};
        text-decoration: none;
        &:visited {
            color: ${primary};
        }
        &:hover {
            text-decoration: underline;
        }
    }

    p {
        line-height: 1.5;
    }

    button {
        font-size: 1.6rem;
        border-radius: 4px;
        padding: 0.5em 1em;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 
            0 1px 2px rgba(0,0,0,0.24);
    }
`;

export default GlobalStyles;
