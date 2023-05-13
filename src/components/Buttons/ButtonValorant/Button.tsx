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
}

export const ButtonValorant = ({ href, content, className }: IProps) => {
	return (
		<ButtonContainer href={href} className={className}>
			<ButtonSpanContainer>
				<ButtonSpanHover />
				<ButtonSpanContent>{content}</ButtonSpanContent>
			</ButtonSpanContainer>
		</ButtonContainer>
	);
};
