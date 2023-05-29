import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks-redux";
import {
    useGetAgentsQuery,
    useGetGamemodesQuery,
    useGetMapsQuery,
    useGetWeaponsQuery,
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
    endpoint: "agents" | "maps" | "gamemodes" | "weapons";
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
            : endpoint === "gamemodes" ? useGetGamemodesQuery(language) : useGetWeaponsQuery(language);

    const [viewData, setViewData] = useState<Array<T>>([]);

    useEffect(() => {
        if (!isLoading) {
            setViewData(data.data);
        }
    }, [data]);

    useEffect(() => {
        if (data !== undefined) {
            if (displayName !== undefined && displayName !== "") {
                const find = genericFindByDisplayName<T>(
                    displayName,
                    data.data
                );
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
