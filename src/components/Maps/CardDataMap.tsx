import { IMapApi } from "../../types/maps";
import { CardContainer } from "./maps.styled-components";

import styles from "./cardDataMap.module.css";
import { classNames } from "../../utils/className";

interface IProps {
	map: IMapApi;
	index: number;
}

export const CardDataMap = ({ map, index }: IProps) => {
	const getNumber = () => {
		const n = index + 1;
		return n < 10 ? `0${n}` : n;
	};

	return (
		<CardContainer className="font-dinnextw05-medium">
			<span className={styles.index}>{getNumber()}</span>
			<h4 className={styles.title}>{map.displayName}</h4>
			<span
				className={classNames(
					styles.coordinate,
					"sm:tw-text-left tw-text-right",
				)}
			>
				{map.coordinates}
			</span>
		</CardContainer>
	);
};
