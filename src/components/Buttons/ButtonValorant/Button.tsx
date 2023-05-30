import {
    ButtonContainer,
    ButtonSpanContainer,
    ButtonSpanContent,
    ButtonSpanHover,
} from "./buttonValorant.styled-component";

interface IProps {
    href: string;
    content: string;
    className: string;
    color?: string;
	colorHover?: string
    backgroundColor?: string;
    backgroundColorHover?: string;
}

export const ButtonValorant = ({
    href,
    content,
    className,
	color,
	colorHover,
    backgroundColor,
	backgroundColorHover
}: IProps) => {
    return (
        <ButtonContainer href={href} className={className} colorHover={colorHover}>
            <ButtonSpanContainer backgroundColor={backgroundColor}>
                <ButtonSpanHover backgroundColorHover={backgroundColorHover} />
                <ButtonSpanContent color={color}>{content}</ButtonSpanContent>
            </ButtonSpanContainer>
        </ButtonContainer>
    );
};
