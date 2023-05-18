import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";
import { devices } from "../../config/styles/breakpoint";

export const CardTitle = styled.h3`
    display: block;
    margin-top: 0;
    font-family: "TungstenBold", arial, georgia, sans-serif;
    text-transform: uppercase;
    font-size: 4.2em;
    line-height: normal;
    transition: right 0.5s ease-out;

    position: absolute;
    left: 0;
    text-align: right;
    right: 100%;
`;

export const CardText = styled.p`
    font-family: "dinnextw1g", arial, georgia, sans-serif;
    font-size: 1.4em;

    @media screen and (${devices.sm}) {
        font-size: 1.2em;
    }
`;

export const CardBody = styled.div`
    width: 100%;
    height: 4.2em;
    position: relative;

    @media screen and (${devices.sm}) {
        height: 3.5em;

        & ${CardTitle} {
            margin-top: 0.1em;
            font-size: 2.8em;
        }
    }
`;

export const CardImg = styled.img`
    width: 100%;
`

export const CardContent = styled.div`
    width: 100%;
    padding: 0.6em;
    background-color: ${colorsApp.blue};
    color: ${colorsApp.gray[200]};
    position: relative;
`;

export const CardContainer = styled.div`
    width: 100%;
    display: block;
    padding: 0.8rem;
    position: relative;
    border: none;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition-property: box-shadow, transform;
    transition: 0.5s ease-out;

    & span {
        position: absolute;
        background: ${colorsApp.red};
        transition: all 0.5s ease-out;
    }

    & span:nth-child(1) {
        width: 100%;
        height: 1px;
        top: 0;
        left: -100%;
    }

    & span:nth-child(2) {
        width: 100%;
        height: 1px;
        bottom: 0;
        right: -100%;
    }

    & span:nth-child(3) {
        width: 1px;
        height: 100%;
        bottom: -100%;
        left: 0;
    }

    & span:nth-child(4) {
        width: 1px;
        height: 100%;
        top: -100%;
        right: 0;
    }

    &:hover {
        //box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        transform: translateY(-0.3em);
    }

    &:hover span:nth-child(1) {
        left: 0;
    }

    &:hover span:nth-child(2) {
        right: 0;
    }

    &:hover span:nth-child(3) {
        bottom: 0;
    }

    &:hover span:nth-child(4) {
        top: 0;
    }

    &:hover ${CardContent} ${CardBody} ${CardTitle} {
        right: 0;
    }
`;

/**
 * 
 * const CardContainer = styled.div`
    width: 100%;
    display: block;
    padding: 0.6rem;
    position: relative;
    border: 0;
    cursor: pointer;

    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 1px;
        background-color: ${colorsApp.red};
        transition: all 0.3s ease-out;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 1px;
        background-color: ${colorsApp.red};
        transition: all 0.3s ease-out;
    }

    &:hover::before,
    &:hover::after {
        width: 100%;
        left: 0;
    }
`;
 */
