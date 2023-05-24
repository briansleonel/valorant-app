import styled from "styled-components";
import { devices } from "../../config/styles/breakpoint";
import { colorsApp } from "../../config/styles/colors";

interface IProps {
    color?: string;
    border?: boolean;
}

export const Title = styled.h2<IProps>`
    font-family: "TungstenBold", arial, georgia, sans-serif;
    font-size: 6em;
    text-transform: uppercase;
    display: inline-block;
    width: 100%;
    line-height: 0.86;
    color: ${(p) => (p.color ? p.color : colorsApp.blue)};
    z-index: 2;

    @media only screen and (${devices.md}) {
        font-size: 7.5em;
    }
`;

export const TitleEffects = styled(Title)`
    ::before {
        content: "";
        position: absolute;
        right: 0.2em;
        border-top: 1px solid ${colorsApp.gray[400]};
        width: 40%;
    }

    ::after {
        content: "";
        right: 0;
        background-color: ${colorsApp.red};
        width: 0.06em;
        height: 0.06em;
        position: absolute;
    }

    @media only screen and (${devices.md}) {
        ::before {
            right: 0.5em;
            width: 60%;
        }
    }
`;

export const Subtitle = styled.h6<IProps>`
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(p) => (p.color ? p.color : colorsApp.gray[300])};
`;

export const Paragraph = styled.p<IProps>`
    font-size: 1.1em;
    color: ${(p) => (p.color ? p.color : colorsApp.gray[300])};

    ${(p) =>
        p.border ? "border-bottom: 1px solid " + colorsApp.gray[300] + ";" : ""}
    ${(p) => (p.border ? "padding-bottom: 3em;" : "")}
`;
