import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks-redux";
import {
    useGetGamemodesQuery,
    useGetMapsQuery,
    useGetWeaponsQuery,
} from "../services/data";

/*
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
*/

interface TypeEndpoint {
    endpoint: "agents" | "maps" | "gamemodes" | "weapons";
}

export function useData<T>({ endpoint }: TypeEndpoint) {
    const { language } = useAppSelector((state) => state.filters);

    const { error, isLoading, data } =
        endpoint === "maps"
            ? useGetMapsQuery(language)
            : endpoint === "gamemodes"
            ? useGetGamemodesQuery(language)
            : useGetWeaponsQuery(language);

    const [viewData, setViewData] = useState<Array<T>>([]);

    useEffect(() => {
        if (!isLoading) {
            setViewData(data.data);
        }
    }, [data]);

    return {
        error,
        isLoading,
        viewData,
    };
}
