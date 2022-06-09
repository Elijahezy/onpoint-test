import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-ExtraBold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    }

    @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    }

    @font-face {
    font-family: 'DINPro';
    src: url('/fonts/DINPro.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    }




    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Gilroy';
    }



`;
