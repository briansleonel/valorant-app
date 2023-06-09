import { useEffect, useState } from "react";
import { TitleEffects } from "../components/StyledComponents/title.styled-component.tsx.js";
import { useData } from "../hooks/useData.js";
import { IMapApi } from "../types/maps.js";
import { SliderValorant } from "../components/Slider/SliderValorant.js";
import {
    ContainerWhitLines,
    ContentWhitLines,
    TextBackground,
} from "../components/StyledComponents/layout.styled-component.js";
import { CardDataMap } from "../components/Maps/CardDataMap.js";
import { Loader } from "../components/Loader/Loader.js";

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
        <>
            {error ? (
                <h4>Hubo un error</h4>
            ) : isLoading ? (
                <Loader />
            ) : (
                <ContainerWhitLines>
                    <TextBackground className="font-dinnextw05-bold">
                        <span>We Are</span>
                        <span>VALORANT</span>
                    </TextBackground>
                    <ContentWhitLines>
                        <TitleEffects className="tw-text-blue tw-mt-6 sm:tw-mt-0">
                            Mapas
                        </TitleEffects>
                        <div className="tw-relative tw-pb-20 sm:tw-pb-0 tw-pr-0 tw-mt-4  md:tw-ml-32 md:tw-mr-20">
                            <div className="tw-w-full tw-overflow-visible tw-relative">
                                {viewData.length > 0 && map ? (
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
                    </ContentWhitLines>
                </ContainerWhitLines>
            )}
        </>
    );
};

export default MapsPage;
