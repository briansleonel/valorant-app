import { ButtonToTop } from "../components/Buttons/ButtonToTop/ButtonToTop";
import GamemodesCards from "../components/Cards/GamemodesCards";
import { Footer } from "../components/Footer/Footer";
import { DropdownLanguage } from "../components/Forms/Dropdown/DropdownLanguages/DropdownLanguage";
import { Loader } from "../components/Loader/Loader";
import {
    ContainerRelative,
    SubContainer,
    SubContainerMinHeight,
} from "../components/StyledComponents/layout.styled-component";
import {
    Paragraph,
    Subtitle,
    Title,
} from "../components/StyledComponents/title.styled-component.tsx";
import { colorsApp } from "../config/styles/colors";
import { useData } from "../hooks/useData";
import { IGamemodeApi } from "../types/gamemodes";

import styles from "./global.module.css";

const GamemodesPage = (): JSX.Element => {
    const { error, isLoading, viewData } = useData<IGamemodeApi>({
        endpoint: "gamemodes",
    });

    return (
        <>
            {error ? (
                <h4>Hubo un error</h4>
            ) : isLoading ? (
                <Loader />
            ) : (
                <>
                    <ContainerRelative>
                        <picture className={styles.backgroundImage}>
                            <span></span>
                        </picture>
                        <SubContainerMinHeight minHeight="12m;">
                            <Title color={colorsApp.gray[300]}>
                                Modos de Juego
                            </Title>

                            <div className={styles.wrapper}>
                                <div className={styles.language}>
                                    <label
                                        htmlFor="language"
                                        className="tw-text-lg tw-text-gray-300"
                                    >
                                        Idioma
                                    </label>
                                    <div className="tw-w-full tw-mt-2">
                                        <DropdownLanguage />
                                    </div>
                                </div>

                                <div className={styles.infoRight}>
                                    <Subtitle>// Conocé los modos</Subtitle>
                                    <Paragraph
                                        className="tw-mt-4"
                                        border={true}
                                    >
                                        Descubre todos los modos de juegos que
                                        podes escoger en Valorant y preparate
                                        para la aventura.
                                    </Paragraph>
                                </div>
                            </div>
                        </SubContainerMinHeight>
                    </ContainerRelative>
                    <ContainerRelative>
                        <SubContainer className="sm:tw-hidden !tw-mt-8">
                            <Subtitle>// Conocé los modos</Subtitle>
                            <Paragraph className="tw-mt-4 tw-mb-10">
                                Descubre todos los modos de juegos que podes
                                escoger en Valorant y preparate para la
                                aventura.
                            </Paragraph>
                            <label
                                htmlFor="language"
                                className="tw-text-lg tw-text-gray-500"
                            >
                                Idioma
                            </label>
                            <div className="tw-w-full tw-mt-2">
                                <DropdownLanguage />
                            </div>
                        </SubContainer>
                    </ContainerRelative>
                    <ContainerRelative>
                        <SubContainer className="!tw-mt-4 sm:!tw-mt-6">
                            <GamemodesCards data={viewData} />
                        </SubContainer>
                        <ButtonToTop />
                    </ContainerRelative>

                    <ContainerRelative>
                        <Footer />
                    </ContainerRelative>
                </>
            )}
        </>
    );
};

export default GamemodesPage;

/*
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
