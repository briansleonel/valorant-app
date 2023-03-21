import { useEffect, useState } from "react";
import { agentsApi } from "../api/agents.api";
import { IAgentApi } from "../types/agents";
import AgentsCards from "../components/Cards/AgentsCards";

export const Agents = (): JSX.Element => {
    const [agentsData, setAgentsData] = useState<Array<IAgentApi> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        agentsApi
            .getAll({ language: "es-MX" })
            .then((res) => {
                setAgentsData(res.data);
                setTimeout(() => setLoading(false), 1000);
                //setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>{loading ? <h1>Loading...</h1> : <AgentsCards data={agentsData} />}</>
    );
};
