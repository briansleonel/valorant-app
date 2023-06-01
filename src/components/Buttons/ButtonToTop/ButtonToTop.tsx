import { ArrowUpIcon } from "@heroicons/react/20/solid";
import styled from "styled-components";
import { colorsApp } from "../../../config/styles/colors";
import { devices } from "../../../config/styles/breakpoint";

export const ButtonToTop = () => {
    const onClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button onClick={() => onClick()}>
            <ArrowUpIcon />
        </Button>
    );
};

const Button = styled.button`
    width: 3.5em;
    height: 3.5em;
    padding: 0.5em;
    position: absolute;
    bottom: 1em;
    right: 1em;
    color: ${colorsApp.gray[200]};
    background-color: ${colorsApp.red};
    border-radius: 50%;
    opacity: 0.8;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.88);

    transition: opacity 0.5s ease-out;

    &:active,
    &:hover {
        opacity: 1;
    }

    @media screen and (${devices.lg}) {
        width: 4em;
        height: 4em;
        bottom: 2em;
        right: 2em;
    }
`;
