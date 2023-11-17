import { createGlobalStyle } from 'styled-components'

import bkg01 from '../../public/bkg01.png';
import bkg02 from '../../public/bkg02.png';

const globalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root  { 
        height: 100%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: url(${bkg02}) no-repeat 1010px, url(${bkg01}) no-repeat 931px;
        background-size: cover;
        background-color: #F8FDFF;


    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }

`

export default globalStyle;