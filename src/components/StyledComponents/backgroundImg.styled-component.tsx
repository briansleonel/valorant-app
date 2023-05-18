import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";
import { devices } from "../../config/styles/breakpoint";

interface IProps {
    img: string;
}

export const BackgroundImgMain = styled.section<IProps>`
    background: url(${(p) => p.img}) center no-repeat fixed;
    background-size: cover;
    width: 100vw;
    height: 100%;

    position: relative;
`;

export const BackgroundImgContentFlex = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: auto;
`;

export const BackgroundContent = styled.div`
    background-color: ${colorsApp.blue};
    //max-height: 30.5rem;
    max-height: 55.5rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;

    @media only screen and (${devices.md}) {
        //max-height: 64.5rem;
        max-height: fit-content;
    }
`;

export const BackgroundImg = styled.span<IProps>`
    background-image: url(${(p) => p.img});
    background-position: 50%;
    background-size: cover;
    position: absolute;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    //opacity: 0;
    top: 0;
    left: 0;
`;