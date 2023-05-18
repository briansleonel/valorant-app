import AgentCards from "../../components/Cards/AgentCards";
import { IAgentApi } from "../../types/agents";
import { useData } from "../../hooks/useData";
import FiltersComponent from "../../components/Filter/Filters";

import imageBackground from "../../assets/img/agents-background.jpg";
import imageMain from "../../assets/img/agents-group.png";

import { Title } from "../../components/StyledComponents/title.styled-component.tsx";
import { colorsApp } from "../../config/styles/colors";

import styles from "./agents.module.css";
import { ContainerRelative } from "../../components/StyledComponents/layout.styled-component";
import { BackgroundImage } from "../../components/BackgroundImage/BackgroundImage";

const AgentsPage = (): JSX.Element => {
    const { error, isLoading, viewData } = useData<IAgentApi>({
        endpoint: "agents",
    });

    return (
        <>
            <ContainerRelative color={colorsApp.gray[400]}>
                <BackgroundImage img={imageBackground} />
                <div className={styles.sectionWrapper}>
                    <Title
                        color={colorsApp.gray[300]}
                        className="tw-left-0 tw-absolute tw-top-8"
                    >
                        Agentes
                    </Title>

                    <picture className={styles.containerImg}>
                        <img
                            src={imageMain}
                            alt="Agents Group"
                            className="tw-w-96"
                        />
                    </picture>

                    <div className={styles.containerTitle}>
                        <h6 className=" tw-text-base tw-text-gray-300 tw-uppercase tw-mt-28 ">
                            // Conoce al equipo
                        </h6>
                        <p className="tw-text-base tw-text-gray-300 tw-mt-6">
                            Descubre más formas de plantar la spike y dominar a
                            tus enemigos con estos guerrilleros, estrategas y
                            cazadores de diferentes estilos.
                        </p>
                    </div>
                </div>
            </ContainerRelative>
            <ContainerRelative>
                <div className="tw-h-auto tw-w-full tw-relative tw-mt-8 sm:tw-hidden tw-text-lg tw-p-4">
                    <h6 className=" tw-text-gray-500 tw-uppercase">
                        // Conoce al equipo
                    </h6>
                    <p className="tw-text-gray-400 tw-mt-2">
                        Descubre más formas de plantar la spike y dominar a tus
                        enemigos con estos guerrilleros, estrategas y cazadores
                        de diferentes estilos.
                    </p>
                </div>
                <FiltersComponent />
            </ContainerRelative>

            <ContainerRelative>
                {error ? (
                    <h4>Hubo un error</h4>
                ) : isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <AgentCards data={viewData} />
				)}
            </ContainerRelative>
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
