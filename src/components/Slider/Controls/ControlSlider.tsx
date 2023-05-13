import styled from "styled-components";
import { IMapApi } from "../../../types/maps";

import styles from "./controlslider.module.css";
import { devices } from "../../../config/styles/breakpoint";
import { classNames } from "../../../utils/className";

interface IControlSlider {
	data: Array<IMapApi>;
	activeIndex: number;
	onClick: (index: number) => void;
	className: string;
}

export const ControlSlider = ({
	data,
	activeIndex,
	onClick,
	className,
}: IControlSlider) => {
	return (
		<ul className={classNames(styles.containerControlSlider, className)}>
			{data.map((e, i) => (
				<li key={e.uuid}>
					<button
						type="button"
						onClick={() => onClick(i)}
						className={i === activeIndex ? styles["controlActive"] : ""}
					>
						{i}
					</button>
				</li>
			))}
		</ul>
	);
};

const Container = styled.ul`
	position: absolute;
    z-index: 1;
    margin: 0;
    padding: 0;
    list-style: none;

	& li {
		margin-left: 0;
		cursor: pointer;
		margin: 0 0.1rem;
		padding: 0;
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 1.7rem;
	}

	& li button {
		background: transparent;
			border: none;
			cursor: pointer;
			color: transparent;
			display: block;
			font-size: 0;
			height: 100%;
			line-height: 0;
			outline: none;
			width: 100%;
	}

	& li button::before, & li button::after {
		content: "";
		display: block;
		height: 0.5rem;
		position: absolute;
		width: 100%;
	} 

	& li button::before {
		border: 1px solid #8b978f;
	}

	& li button::after {
		transition: background-color .3s;
	}

	& li:hover button::after {
		background-color: #ff4655;
	}

	@media only screen and (${devices.md}) {
		display: none;

		& li {
			margin-left: 0;
			cursor: pointer;
			margin: 0 0.2rem;
			padding: 0;
			display: inline-block;
			height: 1.5rem;
			position: relative;
			width: 2rem;
		}
	}
`;

/*
const Container = styled.ul`
	display: flex;
    flex-wrap: nowrap;
	justify-content: left;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
	gap: .4em;

	& li {
		display: inline-block;
		width: 2em;
		height: .5em;
	}

	& li:first-child {
		margin-left : 0;
	}

	& li button {
    	background: transparent;
        border: 1px solid #8b978f;
        cursor: pointer;
        color: transparent;
        font-size: 0;
        height: 100%;
        line-height: 0;
        outline: none;
        width: 100%;
	}
	
	& li button::before {
    	border: 1px solid #8b978f;
	}

	& li button::after {
    	transition: background-color .3s;
	}

	@media only screen and (${devices.md}) {
        & li {
			
		}
    }
`;
*/
/**
	<ul className={styles.containerControlSlider}>
			{data.map((e, i) => (
				<li key={e.uuid}>
					<button
						type="button"
						onClick={() => onClick(i)}
						className={i === activeIndex ? styles["controlActive"] : ""}
					>
						{i}
					</button>
				</li>
			))}
		</ul>
 */
