import { useEffect, useState } from "react";
import GamemodesCards from "../components/Cards/GamemodesCards";
import { useAppDispatch, useAppSelector } from "../hooks/hooks-redux";
import { fetchGamemodes, getGamemodesApi } from "../store/gamemodes/fetchGamemodes";
import { StatusData } from "../types/data.enum";
import { findDataByDisplayName, setData } from "../store/data/dataSlice";

const GamemodesPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
	const { data } = useAppSelector((state) => state.data);
	const [status, setStatus] = useState<StatusData>(StatusData.LOAD);

	const { language, order, displayName } = useAppSelector(
		(state) => state.filters,
	);

	useEffect(() => {
		setStatus(StatusData.LOADING);
		getGamemodesApi({
			language: language,
		})
			.then((res) => {
				dispatch(setData(res));
				setStatus(StatusData.LOAD);
			})
			.catch((err) => console.log(err));

		console.log(`Change language to ${language}`);
	}, [language]);

	useEffect(() => {
		if (displayName !== "") {
			dispatch(findDataByDisplayName({ displayName }));
			console.log(`Search by displayname: '${displayName}'`);
		}
	}, [displayName]);

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
