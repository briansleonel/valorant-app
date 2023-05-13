import styled from "styled-components";
import { devices } from "../../config/styles/breakpoint";

interface IProps {
	img: string;
    active: boolean;
}

export const SliderMain = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Slides = styled.div`
    display: flex;
    flex-wrap: nowrap;
	flex-direction: row;
    width: 100%;
    transition: transform 1.5s ease-out;
`;

export const ImageSlider = styled.div<IProps>`
    width: 100%;
    position: relative;
    height: 24em;
    margin-left: 2em;
    flex-shrink: 0;
    background: url(${(p) => p.img}) center no-repeat;
    opacity: ${(p) => p.active ? "1" : ".5"};
    background-size: cover;
    transition: opacity .4s ease-out;

    @media only screen and (${devices.md}) {
        height: 30em;
        margin-left: 4em;
        width: 100%;
    }
    /*
    @media only screen and (${devices.lg}) {
        height: 26em;
        margin-left: 4em;
        width: calc(100% - 15%);
    }
    */
`;
