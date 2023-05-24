import styled from "styled-components";
import { devices } from "../../../config/styles/breakpoint";

interface IProps {
    img: string;
    displayName: string;
}

export const ImageAgent = ({ img, displayName }: IProps) => {
    return (
        <Picture>
            <img src={img} alt={displayName} />
        </Picture>
    );
};

const Picture = styled.picture`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: block;

    & img {
        max-width: none;
        width: 160%;
        position: absolute;
        top: -2em;
        right: 50%;
        transform: translate(50%, 0%);
        transform-origin: center;
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    @media only screen and (${devices.sm}) {
        & img {
            top: -8em;
            width: 70%;
        }
    }
`;
