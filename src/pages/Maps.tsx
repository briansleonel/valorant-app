import { useEffect, useState } from "react";
import { IMapApi } from "../types/maps";
import { mapsApi } from "../api/map.api";
import MapsCards from "../components/Cards/MapsCards";
import { useAppDispatch, useAppSelector } from "../app/hooks-redux";
import { fetchMaps } from "../reducers/maps/fetchMaps";

const MapsPage = (): JSX.Element => {
    /*
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
    */

    const dispatch = useAppDispatch();
    const { status, data } = useAppSelector((state) => state.maps);

    const { language, order, displayName } = useAppSelector(
        (state) => state.filters
    );

    useEffect(() => {
        dispatch(
            fetchMaps({
                language: language || "en-US",
                isPlayableCharacter: true,
                endpoint: "maps",
            })
        );
    }, [language]);

    return (
        <>
            {status === "loading" ? (
                <h1>Loading...</h1>
            ) : (
                <MapsCards data={data} />
            )}
        </>
    );
};

export default MapsPage;
