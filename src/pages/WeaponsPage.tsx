import { ButtonToTop } from "../components/Buttons/ButtonToTop/ButtonToTop";
import { WeaponsCards } from "../components/Cards/WeaponsCards";
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

import styles from "./global.module.css";

const WeaponsPage = () => {
    const { error, isLoading, viewData } = useData({ endpoint: "weapons" });

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
                            <Title color={colorsApp.gray[300]}>Armas</Title>

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
                                    <Subtitle>// Conocé las armas</Subtitle>
                                    <Paragraph
                                        className="tw-mt-4"
                                        border={true}
                                    >
                                        Elige tu arma y prepárate para esta gran
                                        aventura. ¿Estás listo para unirte a la
                                        experiencia?
                                    </Paragraph>
                                </div>
                            </div>
                        </SubContainerMinHeight>
                    </ContainerRelative>

                    <ContainerRelative>
                        <SubContainer className="sm:tw-hidden !tw-mt-2">
                            <Subtitle>// Conocé las armas</Subtitle>
                            <Paragraph className="tw-mt-4 tw-mb-6">
                                Elige tu arma y prepárate para esta gran
                                aventura. ¿Estás listo para unirte a la
                                experiencia?
                            </Paragraph>
                            <label
                                htmlFor="language"
                                className="tw-text-lg tw-text-gray-200"
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
                            <WeaponsCards data={viewData} />
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

export default WeaponsPage;
