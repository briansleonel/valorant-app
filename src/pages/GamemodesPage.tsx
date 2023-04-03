import { useEffect } from "react";
import GamemodesCards from "../components/Cards/GamemodesCards";
import { useAppDispatch, useAppSelector } from "../app/hooks-redux";
import { fetchGamemodes } from "../reducers/gamemodes/fetchGamemodes";

const GamemodesPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { status, data } = useAppSelector((state) => state.gamemodes);

    const { language, order, displayName } = useAppSelector(
        (state) => state.filters
    );

    useEffect(() => {
        dispatch(
            fetchGamemodes({
                language: language || "en-US",
                isPlayableCharacter: true,
            })
        );
    }, [language]);

    return (
        <>
            {status === "loading" ? (
                <h1>Loading...</h1>
            ) : (
                <GamemodesCards data={data} />
            )}
        </>
    );
};

export default GamemodesPage;
