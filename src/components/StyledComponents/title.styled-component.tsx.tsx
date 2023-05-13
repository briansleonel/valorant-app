import styled from "styled-components";
import { devices } from "../../config/styles/breakpoint";
import { colorsApp } from "../../config/styles/colors";

export const Title = styled.h2`
    font-family: "TungstenBold", arial,georgia,sans-serif;
    font-size: 5em;
    text-transform: uppercase;
    display: inline-block;
    width: 100%;
    line-height: .86;
    z-index: 2;

    ::before {
        content: "";
        position: absolute;
        right: .2em;
        border-top: 1px solid ${colorsApp.gray[400]};
        width: 40%;
    }

    ::after {
        content: "";
        right: 0;
        background-color: ${colorsApp.red};
        width: .06em;
        height: .06em;
        position: absolute;
    }

    @media only screen and (${devices.md}) {
        font-size: 7.5em;

        ::before {
            right: .5em;
            width: 60%;
        }
    }
`;
