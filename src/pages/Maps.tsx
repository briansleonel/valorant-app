import { useEffect, useState } from "react";
import { IMapApi } from "../types/maps";
import { mapsApi } from "../api/map.api";
import MapsCards from "../components/Cards/MapsCards";

export const MapsPage = (): JSX.Element => {
    const [mapsData, setMapsData] = useState<Array<IMapApi> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        mapsApi
            .getAll({ language: "es-MX" })
            .then((res) => {
                setMapsData(res.data);
                setTimeout(() => setLoading(false), 1000);
                //setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return <>{loading ? <h1>Loading...</h1> : <MapsCards data={mapsData} />}</>;
};
