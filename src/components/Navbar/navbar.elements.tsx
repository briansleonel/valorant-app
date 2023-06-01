import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { devices } from "../../config/styles/breakpoint";

export const Nav = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    z-index: 50;

    padding: 1em;

    background-color: ${colorsApp.black};
    -webkit-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.9);
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.9);

    @media (${devices.sm}) {
        & {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    @media (${devices.md}) {
        & {
            padding-left: 4rem;
            padding-right: 4rem;
        }
    }

    @media (${devices.lg}) {
        & {
            padding-left: 8rem;
            padding-right: 8rem;
        }
    }
`;

export const NavLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    color: ${colorsApp.gray[200]};

    font-size: 1.4em;

    & img {
        margin-right: 1em;
        height: 100%;
    }
`;

export const LinkTo = styled(NavLink)`
    color: ${colorsApp.gray[200]};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;
    text-align: center;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: ${colorsApp.red};
        border-radius: 100px;
        bottom: -2px;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s;
    }

    &.active::after {
        transform: scaleX(1);
        transform-origin: right;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: ${colorsApp.red};
        border-radius: 100px;
        bottom: -2px;
        left: 0;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s;
    }

    &:hover::before {
        transform: scaleX(1);
        transform-origin: left;
    }
`;

export const NavMenu = styled.div`
    display: none;

    //margin-right: -24px;

    /* Second Nav */
    /* margin-right: 24px; */

    /* Third Nav */
    /* width: 100vw;
        white-space: nowrap; */

    @media screen and (${devices.lg}) {
        width: calc(100% - 40%);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const NavMenuMobile = styled.div<{ open: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    background-color: ${colorsApp.black};
    position: absolute;
    top: 4em;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: fit-content;
    transition: .5s all ease;
    padding: 2em;

    @media screen and (${devices.lg}) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        fill: ${colorsApp.gray[200]};
        width: 2em;
    }

    @media screen and (${devices.lg}) {
        display: none;
    }
`;
