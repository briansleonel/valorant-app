import {
	ButtonContainer,
	ButtonSpanContainer,
	ButtonSpanContent,
	ButtonSpanHover,
} from "../StyledComponents/ButtonMain-SC";

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

/*
	<a className={classNames(styles["button-main"], className)} href={href}>
			<div className={styles["button-span-container"]}>
				<span className={styles["span-hover"]}> </span>
				<span className={styles["span-content"]}>{content}</span>
			</div>
	</a>
*/
