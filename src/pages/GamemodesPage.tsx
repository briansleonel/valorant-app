import { useEffect, useState } from "react";
import { IGamemodeApi } from "../types/gamemodes";
import GamemodesCards from "../components/Cards/GamemodesCards";
import { gamemodesApi } from "../api/gamemodes.api";

export const GamemodesPage = (): JSX.Element => {
    const [mapsData, setMapsData] = useState<Array<IGamemodeApi> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        gamemodesApi
            .getAll({ language: "es-MX" })
            .then((res) => {
                setMapsData(res.data);
                setTimeout(() => setLoading(false), 1000);
                //setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            {loading ? <h1>Loading...</h1> : <GamemodesCards data={mapsData} />}
        </>
    );
};
