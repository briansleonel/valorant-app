import styled from "styled-components";
import { devices } from "../../config/styles/breakpoint";
import { colorsApp } from "../../config/styles/colors";

interface IProps {
    color?: string;
    //overflow?: boolean;
    position?: string;
}

export const Container = styled.section<IProps>`
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 0 7.3%;

    //position: ${(p) => (p.position ? p.position : "relative")};
    position: absolute;
    overflow: hidden;
`;

export const ContainerRelative = styled.section`
    padding: 0 5%;
    //overflow: visible;
    position: relative;
    width: 100%;
    //height: auto;

    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        display: block;
        height: 100%;
        pointer-events: none;
        position: absolute;
        top: 0;
        z-index: 1;

        border-left: 1px solid ${colorsApp.dark[500]};
        left: 5%;
    }

    @media only screen and (${devices.lg}) {
        padding-left: 7.3%;
        padding-right: 7.3%;

        &::after {
            left: 7.3%;
            border-left: 1px solid ${colorsApp.gray[400]};
        }
    }
`;

export const SubContainer = styled.div`
    margin: 5% 0;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: fit-content;
`;

export const SubContainerAbsolute = styled(SubContainer)`
    width: 100%;
    height: calc(100vh - 4em);
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;

    &::after {
        content: "";
        display: block;
        height: 100%;
        pointer-events: none;
        position: absolute;
        top: 0;
        z-index: 1;

        border-left: 1px solid ${colorsApp.dark[500]};
        left: 5%;
    }

    @media only screen and (${devices.lg}) {
        padding-left: 7.3%;
        padding-right: 7.3%;

        &::after {
            left: 7.3%;
            border-left: 1px solid ${colorsApp.gray[400]};
        }
    }
`;

export const SubContainerMinHeight = styled.div`
    margin: 5% 0;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 30rem;
`;

export const Content = styled.div<IProps>`
    margin: 0 auto;
    //padding: 5.5em 0;
    padding: 4em 0;
    position: relative;
    width: 100%;

    overflow: hidden;
    height: auto;
    max-width: 100%;

    @media only screen and (${devices.md}) {
        padding: 7em 0;
    }
`;

//${(p) => (p.overflow ? "overflow: hidden" : "")};

export const TextBackground = styled.div`
    position: absolute;
    left: 0;
    top: 4em;
    text-transform: uppercase;
    white-space: nowrap;

    -webkit-text-stroke-color: #dbd8d2;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    line-height: 0.82;

    & span {
        display: block;
        font-size: 24vw;
    }

    & span:first-child {
        margin-left: -0.06em;
    }

    & span:last-child {
        margin-left: 0.4em;
    }
`;

export const ContainerWhitLines = styled(Container)`
    &::after {
        content: "";
        border-left: 1px solid
            ${(p) => (p.color ? p.color : colorsApp.gray[400])};
        display: block;
        height: 100%;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 1;
        z-index: 1;
    }

    @media only screen and (${devices.md}) {
        padding: 0 7em;

        &::after {
            border-left: 1px solid
                ${(p) => (p.color ? p.color : colorsApp.gray[200])};
        }
    }
`;

export const ContentWhitLines = styled(Content)`
    &::before {
        border-left: none;
    }

    &::after {
        border-right: none;
    }

    @media only screen and (${devices.md}) {
        &::before {
            content: "";
            display: block;
            position: absolute;
            border-left: 1px solid #f4f1ed;
            width: auto;
            z-index: 2;
            margin-bottom: 2rem;
            height: 100%;
            pointer-events: none;
            left: calc(25% + 1rem);
            top: 0;
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            border-right: 1px solid hsla(0, 0%, 100%, 0.5);
            right: 0;
            top: 0;
            height: 100%;
            pointer-events: none;
            z-index: 2;
        }
    }
`;
