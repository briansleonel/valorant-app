import { useEffect, useState } from "react";
import { agentsApi } from "../api/agents.api";
import { IAgentApi } from "../types/agents";
import AgentsCards from "../components/Cards/AgentsCards";
import { useAppSelector } from "../app/hooks-redux";

export const Agents = (): JSX.Element => {
    const [agentsData, setAgentsData] = useState<Array<IAgentApi> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { language, order, displayName } = useAppSelector(
        (state) => state.filters
    );

    useEffect(() => {
        agentsApi
            .getAll({
                language: language || "en-US",
                isPlayableCharacter: true,
            })
            .then((res) => {
                setAgentsData(res.data);
                setTimeout(() => setLoading(false), 1000);
                //setLoading(false);
            })
            .catch((err) => console.error(err));

        console.log(language);
    }, [language]);

    return (
        <>{loading ? <h1>Loading...</h1> : <AgentsCards data={agentsData} />}</>
    );
};
