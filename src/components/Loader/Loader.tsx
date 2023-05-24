import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";
import {
    ContainerRelative,
    SubContainerAbsolute,
} from "../StyledComponents/layout.styled-component";

export const Loader = () => {
    return (
        <ContainerRelative>
            <SubContainerAbsolute>
                <ContainerLoader>
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                    <Element />
                </ContainerLoader>
            </SubContainerAbsolute>
        </ContainerRelative>
    );
};

const ContainerLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    gap: 0.5em;
`;

const Element = styled.span`
    width: 0.6em;
    height: 0.6em;
    background: ${colorsApp.red};
    animation: scale 1s ease-in-out infinite;

    &:nth-child(2) {
        animation-delay: -0.8s;
    }

    &:nth-child(3) {
        animation-delay: -0.7s;
    }

    &:nth-child(4) {
        animation-delay: -0.6s;
    }

    &:nth-child(5) {
        animation-delay: -0.5s;
    }

    @keyframes scale {
        0%,
        40%,
        100% {
            //transform: scaleY(0.2);
            height: 0.6em;
        }

        20% {
            //transform: scaleY(1);
            height: 4em;
        }
    }
`;
