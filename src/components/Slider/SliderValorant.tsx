import { useEffect, useRef, useState } from "react";
import { IMapApi } from "../../types/maps";
import { ControlSlider } from "./Controls/ControlSlider";
import styles from "./sliderValorant.module.css";
import { ImageSlider } from "./sliderValorant.styled-component";

interface IProps {
	data: Array<IMapApi>;
	setMap: (map: IMapApi) => void;
	setIndex: (index: number) => void;
}

export const SliderValorant = ({ data, setMap, setIndex }: IProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const imgRef = useRef<HTMLImageElement>(null);
	const slidesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setMap(data[activeIndex]);
	}, []);

	const goToSlide = (slideIndex: number) => {
		if (slidesRef.current !== null && imgRef.current !== null) {
			// get margin left from img to
			const marginLeft: number = parseFloat(
				getComputedStyle(imgRef.current).marginLeft,
			);
			// get width from img
			const width: number = imgRef.current.offsetWidth;
			const totalWidth = width + marginLeft;

			setActiveIndex(slideIndex);
			slidesRef.current.style.transform = `translateX(-${
				slideIndex * totalWidth
			}px)`;

			setMap(data[slideIndex]);
			setIndex(slideIndex);
		}
	};

	return (
		<div className={styles["slider"]}>
			<ControlSlider
				className="sm:tw-hidden tw-block !tw-mb-4"
				data={data}
				activeIndex={activeIndex}
				onClick={goToSlide}
			/>

			<div ref={slidesRef} className={styles["slides"]}>
				{data.map((e, i) => (
					<ImageSlider key={e.uuid} img={e.splash} ref={imgRef} active={activeIndex === i} />
				))}
			</div>

			<ControlSlider
				className="tw-hidden sm:tw-block"
				data={data}
				activeIndex={activeIndex}
				onClick={goToSlide}
			/>
		</div>
	);
};

/*

<div ref={slidesRef} className={styles["slides"]}>
				{data.map((e, i) => (
					<img src={e.splash} alt={e.displayName} ref={imgRef} />
				))}
			</div>

const [isDragStart, setIsDragStart] = useState(false);
	const [prevPageX, setPrevPageX] = useState(0);
	const [prevScrollLeft, setPrevScrollLeft] = useState(0);
	const [positionDiff, setPositionDiff] = useState<number>(0);

	//const [firstImageWidth, setFirstImageWidth] = useState(0)

	//const imgRef = useRef<MutableRefObject<LegacyRef<HTMLDivElement> | undefined>>();

	const imgRef = useRef<HTMLImageElement>(null);
	const carouselRef = useRef<HTMLDivElement>(null);

	const { width, height } = useContainerDimensions(imgRef);

	const carouselDragStartEvent = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		// Updatin global variables value on mouse down event
		setIsDragStart(true);
		setPrevPageX(e.pageX);
		setPrevScrollLeft(e.currentTarget.scrollLeft);
	};

	const carosuelDraggingEvent = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		// scrolling images/carousel to left according to mouse pointer
		if (!isDragStart) return;
		e.preventDefault();
        if(carouselRef.current !== null) carouselRef.current.classList.add("dragging")
		setPositionDiff(e.pageX - prevPageX);
		e.currentTarget.scrollLeft = prevScrollLeft - positionDiff;
	};

	const carouselDragStopEvent = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		setIsDragStart(false);
        if(carouselRef.current !== null) carouselRef.current.classList.remove("dragging")
	};

	const onClickLeftRigthHandler = (
		e: React.MouseEvent<SVGSVGElement, MouseEvent>,
	) => {
		if (carouselRef.current !== null) {
			carouselRef.current.scrollLeft +=
				e.currentTarget.id === "left" ? -width : width;
		}
	};

	const autoSlide = () => {
		setPositionDiff(Math.abs(positionDiff));
	};

	//console.log(width);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<ChevronLeftIcon
					id="left"
					className={styles.icon}
					onClick={(e) => onClickLeftRigthHandler(e)}
				/>
				<div
					ref={carouselRef}
					className={styles.carousel}
					onMouseMove={(e) => carosuelDraggingEvent(e)}
					onMouseDown={(e) => carouselDragStartEvent(e)}
					onMouseUp={(e) => carouselDragStopEvent(e)}
				>
					{data.map((e) => (
						<img key={e.uuid} src={e.splash} alt={e.displayName} ref={imgRef} />
					))}
				</div>
				<ChevronRightIcon
					id="right"
					className={styles.icon}
					onClick={(e) => onClickLeftRigthHandler(e)}
				/>
			</div>
		</div>
	);
	*/
