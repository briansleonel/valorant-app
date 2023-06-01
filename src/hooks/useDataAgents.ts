import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks-redux";
import { useGetAgentsQuery } from "../services/data";
import { IAgentApi } from "../types/agents";
import { useLocation } from "react-router-dom";

function findByDisplayNameAgents(
    displayName: string,
    data: Array<IAgentApi>
): Array<IAgentApi> {
    const regexp = new RegExp(`^${displayName}`, "i");

    const dataUpdate: Array<IAgentApi> = [];
    data.filter((val) => {
        if (regexp.test(val.displayName)) {
            dataUpdate.push(val);
        }
    });

    return dataUpdate;
}

interface TypeEndpoint {
    endpoint: "agents" | "maps" | "gamemodes" | "weapons";
}

export function useDataAgent({ endpoint }: TypeEndpoint) {
    const { pathname } = useLocation();

    const { language, displayName } = useAppSelector((state) => state.filters);

    const { error, isLoading, data } = useGetAgentsQuery(language);

    const [viewData, setViewData] = useState<Array<IAgentApi>>([]);

    useEffect(() => {
        if (!isLoading) {
            setViewData(data.data);
        }
    }, [data]);

    useEffect(() => {
        if (data !== undefined && pathname === "/agents") {
            if (displayName !== undefined && displayName !== "") {
                const find = findByDisplayNameAgents(displayName, data.data);
                setViewData(find);
                console.log(`Search by displayname: '${displayName}'`);
            } else setViewData(data.data);
        }
    }, [displayName]);

    return {
        error,
        isLoading,
        viewData,
    };
}
