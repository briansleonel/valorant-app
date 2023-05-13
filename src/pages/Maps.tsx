import { useEffect, useState } from "react";
import { Title } from "../components/StyledComponents/title.styled-component.tsx";
import { useData } from "../hooks/useData";
import { IMapApi } from "../types/maps";
import { SliderValorant } from "../components/Slider/SliderValorant";
import { TextBackground } from "../components/StyledComponents/layout.styled-component";
import {
	ContainerMap,
	ContentMap,
} from "../components/Maps/maps.styled-components";
import { CardDataMap } from "../components/Maps/CardDataMap";

const MapsPage = (): JSX.Element => {
	const { error, isLoading, viewData } = useData<IMapApi>({
		endpoint: "maps",
	});

	const [map, setMap] = useState<IMapApi>();

	const [index, setIndex] = useState(0);

	useEffect(() => {
		setMap(viewData[0]);
	}, [viewData]);

	return (
		<ContainerMap>
			<TextBackground className="font-dinnextw05-bold">
				<span>We Are</span>
				<span>VALORANT</span>
			</TextBackground>
			<ContentMap>
				<Title className="tw-text-blue tw-mt-6 sm:tw-mt-0">Mapas</Title>
				<div className="tw-relative tw-pb-20 tw-pr-0 tw-mt-4  md:tw-ml-32 md:tw-mr-20">
					<div className="tw-w-full tw-overflow-visible tw-relative">
						{error ? (
							<h4>Hubo un error</h4>
						) : isLoading ? (
							<h1>Loading...</h1>
						) : viewData.length > 0 && map ? (
							<>
								<SliderValorant
									data={viewData}
									setMap={setMap}
									setIndex={setIndex}
								/>
								<CardDataMap map={map} index={index} />
							</>
						) : (
							""
						)}
					</div>
				</div>
			</ContentMap>
		</ContainerMap>
	);
};

export default MapsPage;
