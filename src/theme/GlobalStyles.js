import { createGlobalStyle } from 'styled-components';

import { CSSBaseline } from './CSSBaseline';

export const GlobalStyles = createGlobalStyle`
    ${CSSBaseline};

    html, body {
        & > * {
            -webkit-tap-highlight-color: transparent;
        }
        
        min-height: -webkit-fill-available;
        height: 100%;
    }

    body {
        min-width: 320px;
    }

    svg, img {
        display: block;
    }

    video {
        object-fit: cover;
    }

    .form-control {
        resize:none;
        outline: none;
        border: none;
        box-shadow: none;
        padding: 0;
        border-radius: 0;

        :focus, :hover, :active {
            outline: none;
            border: none;
            box-shadow: none
        }
    }
`;
