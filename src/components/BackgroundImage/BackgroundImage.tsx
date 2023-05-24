import styled from "styled-components";
import { colorsApp } from "../../config/styles/colors";
import {
    BackgroundContent,
    BackgroundContentAgent,
    BackgroundImg,
} from "../StyledComponents/backgroundImg.styled-component";

interface IProps {
    img: string;
}

export const BackgroundImage = ({ img }: IProps) => {
    return (
        <BackgroundContent>
            <BackgroundImg img={img} />
        </BackgroundContent>
    );
};

export const BackgroundImageAgent = ({ img }: IProps) => {
    return <Background img={img} />;
};

const Background = styled.div<{ img: string }>`
    background-color: ${colorsApp.blue};
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${(p) => p.img}) center no-repeat scroll;
    background-size: cover;
`;

/**
 * 
 * <BackgroundContent>
            <BackgroundImg img={img} />
        </BackgroundContent>
 */
