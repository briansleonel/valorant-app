import { useParams } from "react-router-dom";
import { useGetAgentByIdQuery } from "../../services/data";
import { useAppSelector } from "../../hooks/hooks-redux";
import { useEffect, useState } from "react";
import {
    ContainerRelative,
    SubContainer,
    SubContainerMinHeight,
} from "../../components/StyledComponents/layout.styled-component";
import { colorsApp } from "../../config/styles/colors";
import {
    Paragraph,
    Subtitle,
    Title,
} from "../../components/StyledComponents/title.styled-component.tsx";
import { IAgentApi } from "../../types/agents";
import { Role } from "../../components/Agents/Role/Role";
import { SpecialAbilities } from "../../components/Agents/SpecialAbilities/SpecialAbilities";
import { ImageAgent } from "../../components/Agents/ImageAgent/ImageAgent";
import { DropdownLanguage } from "../../components/Forms/Dropdown/DropdownLanguages/DropdownLanguage";

import styles from "./agent.module.css";
import { Loader } from "../../components/Loader/Loader";
import { ButtonToTop } from "../../components/Buttons/ButtonToTop/ButtonToTop";
import { Footer } from "../../components/Footer/Footer";

type IParams = {
    agentId: string;
};

const AgentPage = () => {
    const [agent, setAgent] = useState<IAgentApi>();

    const { agentId } = useParams<IParams>();
    const { language } = useAppSelector((state) => state.filters);

    const { error, isLoading, data } = useGetAgentByIdQuery({
        agentId: agentId !== undefined ? agentId : "",
        language,
    });

    useEffect(() => {
        if (data !== undefined && data.status === 200) {
            setAgent(data.data);
        }
    }, [data]);

    return (
        <>
            {agent !== undefined ? (
                <>
                    <ContainerRelative>
                        <picture className={styles.backgroundImage}>
                            <span></span>
                        </picture>
                        <SubContainerMinHeight>
                            <Title color={colorsApp.gray[300]}>
                                {agent.displayName}
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

                                <ImageAgent
                                    img={agent.fullPortrait}
                                    displayName={agent.displayName}
                                />

                                <div className={styles.infoRight}>
                                    <Subtitle>// Rol</Subtitle>
                                    <Role
                                        displayIcon={agent.role.displayIcon}
                                        displayName={agent.role.displayName}
                                    />

                                    <Subtitle className="tw-mt-5">
                                        // Biografía
                                    </Subtitle>
                                    <Paragraph
                                        className="tw-mt-4"
                                        border={true}
                                    >
                                        {agent.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </SubContainerMinHeight>
                    </ContainerRelative>

                    <ContainerRelative>
                        <SubContainer className="sm:tw-hidden !tw-mt-12">
                            <label
                                htmlFor="language"
                                className="tw-text-lg tw-text-gray-500"
                            >
                                Idioma
                            </label>
                            <div className="tw-w-full tw-mt-2">
                                <DropdownLanguage />
                            </div>

                            <Subtitle
                                className="tw-mt-14"
                                color={colorsApp.gray[500]}
                            >
                                // Rol
                            </Subtitle>
                            <Role
                                color={colorsApp.blue}
                                displayIcon={agent.role.displayIcon}
                                displayName={agent.role.displayName}
                            />

                            <Subtitle
                                className="tw-mt-5"
                                color={colorsApp.gray[500]}
                            >
                                // Biografía
                            </Subtitle>
                            <Paragraph
                                className="tw-mt-4"
                                color={colorsApp.gray[500]}
                            >
                                {agent.description}
                            </Paragraph>
                        </SubContainer>
                    </ContainerRelative>

                    <ContainerRelative>
                        <SubContainer>
                            <SpecialAbilities abilities={agent.abilities} />
                        </SubContainer>
                        <ButtonToTop />
                    </ContainerRelative>

                    <ContainerRelative>
                        <Footer />
                    </ContainerRelative>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default AgentPage;

/*
<ContainerRelative color={colorsApp.gray[400]}>
                    <BackgroundImageAgent img={backgroundImage} />
                    <Wrapper>
                        <Title
                            color={colorsApp.gray[300]}
                            className="tw-left-0 tw-absolute tw-top-16"
                        >
                            {agent.displayName}
                        </Title>

                        <ImageAgent img={agent.fullPortrait} displayName={agent.displayName} />

                        

                        <ContainerInfo>
                            <h6 className=" tw-text-base tw-text-gray-300 tw-uppercase tw-font-bold">
                                // Rol
                            </h6>
                            <div className="tw-flex tw-items-center tw-mt-2">
                                <p className="font-tungsten-bold tw-text-6xl tw-text-gray-300 tw-uppercase">
                                    {agent.role.displayName}
                                </p>
                                <img
                                    className="tw-w-8 tw-h-8 tw-ml-6"
                                    src={agent.role.displayIcon}
                                    alt=""
                                />
                            </div>

                            <h6 className=" tw-text-base tw-text-gray-300 tw-uppercase tw-mt-8 tw-font-bold">
                                // Biografía
                            </h6>
                            <p className="tw-text-base tw-text-gray-300 tw-mt-2">
                            {agent.description}
                            </p>
                        </ContainerInfo>
                    </Wrapper>
                </ContainerRelative>
*/
