import styled from "styled-components";
import { devices } from "../../config/styles/breakpoint";
import { colorsApp } from "../../config/styles/colors";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 26em;
    display: flex;
    justify-content: end;

    position: relative;
    /*
    //height: auto;
    width: 100%;
    //max-width: 123rem;
    //min-height: 28rem;
    position: relative;

    margin: 0 auto;
    //padding: 4rem 0;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    */
`;

export const ContainerInfo = styled.div`
    width: 20em;
    display: none;

    @media only screen and (${devices.md}) {
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    /*
    width: calc(30% + 0.75rem);
    z-index: 1;

    padding-bottom: 2em;
    border-bottom: 1px solid ${colorsApp.gray[300]};

    display: none;

    @media only screen and (${devices.sm}) {
        display: block;
    }

    @media only screen and (${devices.lg}) {
        display: block;
    }
    */
`;
