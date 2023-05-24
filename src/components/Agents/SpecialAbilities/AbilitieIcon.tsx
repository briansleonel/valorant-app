import styled from "styled-components";
import { Abilities } from "../../../types/agents";
import { colorsApp } from "../../../config/styles/colors";

interface Icon {
    ability: Abilities;
    onClick: (ability: Abilities) => void;
    active: boolean;
}

export const AbilitieIcon = ({ ability, onClick, active }: Icon) => {
    return (
        <IconContainer title={ability.displayName} onClick={(e) => onClick(ability)} active={active}>
            <Icon
                src={ability.displayIcon}
                alt={ability.displayName}
                active={active}
            />
        </IconContainer>
    );
};

const Icon = styled.img<{ active: boolean }>`
    z-index: 1;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out,
        -webkit-transform 0.3s ease-out;

    height: 3.5rem;
    width: 3.5rem;
    filter: brightness(0);
    opacity: ${(p) => (p.active ? "1" : "0.4")};

    transform: scale(1);
`;

const IconContainer = styled.li<{ active: boolean }>`
    width: 5rem;
    height: 5rem;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease-out, border-color 0.3s ease-out;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid
        ${(p) => (p.active ? colorsApp.gray[700] : colorsApp.gray[400])};
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        height: 100%;
        opacity: 1;
        position: absolute;
        top: 0;
        width: 120%;

        left: -10%;

        transform: translateX(-100%) skew(-10deg);

        background-color: ${colorsApp.red};
        transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }

    &:hover::after {
        ${(p) => (p.active ? "" : "transform: translateX(0) skew(-10deg);")}
    }

    &:hover ${Icon} {
        ${(p) =>
            p.active
                ? ""
                : "filter: brightness(1); opacity: 1; transform: scale(1.1);"}
    }
`;
