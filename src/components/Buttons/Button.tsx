import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";

interface IProps {
    bgColor?: string;
    bgColorHover?: string;
}

const Button = styled.button<IProps>`
    width: 100%;
    height: auto;
    position: relative;
    padding: .8em 1em;
    text-transform: uppercase;
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    /*
    &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: ${colorsApp.gray[200]};
        height: 0.3em;
        width: 0.3em;
    }
    */
`;

export const ButtonDark = styled(Button)`
    background-color: ${colorsApp.black};
    color: ${colorsApp.gray[200]};

    &:hover {
        background-color: ${colorsApp.gray[200]};
        color: ${colorsApp.black};
    }
`;

export const ButtonRed = styled(Button)`
    background-color: ${colorsApp.red};
    color: ${colorsApp.gray[200]};

    &:hover {
        background-color: #db3350;
    }
`;

export const ButtonBlue = styled(Button)`
    background-color: ${colorsApp.blue};
    color: ${colorsApp.gray[200]};

    &:hover {
        background-color: #040a14;
    }
`;
