import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";

export const Container = styled.footer`
    width: 100%;
    padding: 2em;
    background-color: #111;
    color: #7e7e7e;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2em;

    position: absolute;
    left: 0;
`;

export const Copyright = styled.span`
    font-family: "dinnextw05-light", arial, georgia, sans-serif;
    text-align: center;
`;

export const SocialNetworks = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonSocialMedia = styled.a`
    width: 2em;
    height: 2em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.2);
    border-radius: 12px;
    margin-left: 1em;

    transform: scale(1);
    transition: all 1s ease-out;

    &:first-child {
        margin-left: 0;
    }

    & svg {
        width: 100%;
        color: ${colorsApp.gray[200]};
    }

    &:hover {
        transform: scale(1.2);
        background-color: rgba(128, 128, 128, 0.4);
    }
`;
