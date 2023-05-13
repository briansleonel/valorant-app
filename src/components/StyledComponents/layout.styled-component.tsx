import styled from "styled-components";
import { devices } from "../../config/styles/breakpoint";

export const Container = styled.section`
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding : 0 7.3%;

    position: absolute;
    overflow: hidden;
`;

export const Content = styled.div`
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

export const TextBackground = styled.div`
    position: absolute;
    left: 0;
    top: 4em;
    text-transform: uppercase;
    white-space: nowrap;
    
    -webkit-text-stroke-color: #dbd8d2;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    line-height: .82;

    & span {
        display: block;
        font-size: 24vw;
    }

    & span:first-child {
        margin-left: -0.06em;
    }

    & span:last-child {
        margin-left: .4em;
    }
`;
