import AgentCards from "../../components/Cards/AgentCards";
import { IAgentApi } from "../../types/agents";
import { useData } from "../../hooks/useData";
import FiltersComponent from "../../components/Filter/Filters";

import imageBackground from "../../assets/img/agents-background.jpg";
import image from "../../assets/img/agents-group.png";

import {
    Paragraph,
    Subtitle,
    Title,
} from "../../components/StyledComponents/title.styled-component.tsx";
import { colorsApp } from "../../config/styles/colors";
import {
    ContainerRelative,
    SubContainerMinHeight,
} from "../../components/StyledComponents/layout.styled-component";
import { BackgroundImage } from "../../components/BackgroundImage/BackgroundImage";
import { ContainerInfo, Wrapper } from "../../components/Agents/Elements";
import { ImageMain } from "../../components/Agents/ImageAgent/ImageMain";
import { Loader } from "../../components/Loader/Loader";

const AgentsPage = (): JSX.Element => {
    const { error, isLoading, viewData } = useData<IAgentApi>({
        endpoint: "agents",
    });

    return (
        <>
            {error ? (
                <h4>Hubo un error</h4>
            ) : isLoading ? (
                <Loader />
            ) : (
                <>
                    <ContainerRelative color={colorsApp.gray[400]}>
                        <BackgroundImage img={imageBackground} />
                        <SubContainerMinHeight>
                            <Wrapper>
                                <Title color={colorsApp.gray[300]}>
                                    Agentes
                                </Title>

                                <ImageMain
                                    img={image}
                                    displayName="Agents >Group"
                                />

                                <ContainerInfo>
                                    <Subtitle>// Conoce al equipo</Subtitle>
                                    <Paragraph
                                        border={true}
                                        className="tw-mt-6"
                                    >
                                        Descubre más formas de plantar la spike
                                        y dominar a tus enemigos con estos
                                        guerrilleros, estrategas y cazadores de
                                        diferentes estilos.
                                    </Paragraph>
                                </ContainerInfo>
                            </Wrapper>
                        </SubContainerMinHeight>
                    </ContainerRelative>

                    <ContainerRelative>
                        <div className="tw-h-auto tw-w-full tw-relative tw-mt-8 sm:tw-hidden tw-text-lg tw-p-4">
                            <Subtitle color={colorsApp.gray[500]}>
                                // Conoce al equipo
                            </Subtitle>
                            <Paragraph
                                className="tw-mt-4"
                                color={colorsApp.gray[400]}
                            >
                                Descubre más formas de plantar la spike y
                                dominar a tus enemigos con estos guerrilleros,
                                estrategas y cazadores de diferentes estilos.
                            </Paragraph>
                        </div>
                        <FiltersComponent />
                    </ContainerRelative>

                    <ContainerRelative>
                        <AgentCards data={viewData} />
                    </ContainerRelative>
                </>
            )}
        </>
    );
};

export default AgentsPage;

/*
		--------- Para usar almacenamiento en la STORE Redux

		const dispatch = useAppDispatch();
		const dataState = useAppSelector((state) => state.data);

		const { language, order, displayName } = useAppSelector(
			(state) => state.filters,
		);

		const { error, isLoading, data } = useGetGamemodesQuery(language);

		useEffect(() => {
			if (!isLoading) {
				dispatch(setData(data));
			}
		}, [data]);

		useEffect(() => {
			if (displayName !== "") {
				dispatch(findDataByDisplayName({ displayName, data }));
				console.log(`Search by displayname: '${displayName}'`);
			}
		}, [displayName]);
	*/

/*
		----------- Para usar alamcenamiento de estado en el componente

		const { language, order, displayName } = useAppSelector(
			(state) => state.filters,
		);
		const { error, isLoading, data } = useGetAgentsQuery(language);

		const [viewData, setViewData] = useState<Array<IAgentApi>>([]);

		useEffect(() => {
			if (!isLoading) {
				setViewData(data.data);
			}
		}, [data]);

		useEffect(() => {
			if (displayName !== "" && displayName !== undefined) {
				const find = genericFindByDisplayName<IAgentApi>(displayName, data.data);
				setViewData(find);
				console.log(`Search by displayname: '${displayName}'`);
			}
		}, [displayName]);
	*/
