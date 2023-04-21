import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks-redux";
import {
    useGetAgentsQuery,
    useGetGamemodesQuery,
    useGetMapsQuery,
} from "../services/data";

function genericFindByDisplayName<T>(
    displayName: string,
    data: Array<T>
): Array<T> {
    const regexp = new RegExp(`^${displayName}`, "i");

    const dataUpdate: Array<T> = [];
    data.filter((val) => {
        if (regexp.test(val.displayName)) {
            dataUpdate.push(val);
        }
    });

    return dataUpdate;
}

interface TypeEndpoint {
    endpoint: "agents" | "maps" | "gamemodes";
}

export function useData<T>({ endpoint }: TypeEndpoint) {
    const { language, order, displayName } = useAppSelector(
        (state) => state.filters
    );

    const { error, isLoading, data } =
        endpoint === "agents"
            ? useGetAgentsQuery(language)
            : endpoint === "maps"
            ? useGetMapsQuery(language)
            : useGetGamemodesQuery(language);

    const [viewData, setViewData] = useState<Array<T>>([]);

    useEffect(() => {
        if (!isLoading) {
            setViewData(data.data);
        }
    }, [data]);

    useEffect(() => {
        if (displayName !== "" && displayName !== undefined) {
            const find = genericFindByDisplayName<T>(displayName, data.data);
            setViewData(find);
            console.log(`Search by displayname: '${displayName}'`);
        }
    }, [displayName]);

    return {
        error,
        isLoading,
        viewData,
    };
}
