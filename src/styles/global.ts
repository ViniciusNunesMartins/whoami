import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }

    main {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`