import {
    BackgroundContent,
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

/**
 * 
 * <BackgroundContent>
            <BackgroundImg img={img} />
        </BackgroundContent>
 */
