import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: sans-serif;
        background: #4e72b2;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
`;
