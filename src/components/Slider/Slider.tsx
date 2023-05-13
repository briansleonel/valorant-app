import {
	ReactNode,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { IMapApi } from "../../types/maps";

import styles from "./slider.module.css";
import { useContainerDimensions } from "../../hooks/useContainerDimensions";
import { ControlSlider } from "./Controls/ControlSlider";

interface IProps {
	data: Array<IMapApi>;
}

export const Slider = ({ data }: IProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// Determinar el slide anterior
	/*
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? data.length : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	// Determinar el siguiente slide
	const nextSlide = () => {
		const isLastSlide = currentIndex === data.length;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	// Al seleccionar un determinado index
	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};
    */

	// Al seleccionar un determinado index
	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className={styles["sliderContainer"]}>
			<div
				style={{ backgroundImage: `url(${data[currentIndex].splash})` }}
				className={styles.slide}
			/>

			<ControlSlider className=""  data={data} activeIndex={currentIndex} onClick={goToSlide}/>
			
		</div>
	);
};

/*
	<ul className={styles.containerControlSlider}>
				{data.map((e, i) => (
					<li key={e.uuid}>
						<button
							type="button"
							onClick={() => goToSlide(i)}
							className={i === currentIndex ? styles["controlActive"] : ""}
						>
							{i}
						</button>
					</li>
				))}
			</ul>
*/