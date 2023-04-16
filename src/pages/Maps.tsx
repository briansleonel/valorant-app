import { useEffect, useState } from "react";
import MapsCards from "../components/Cards/MapsCards";
import { useAppDispatch, useAppSelector } from "../hooks/hooks-redux";
import { getMapsApi } from "../store/maps/fetchMaps";
import { findDataByDisplayName, setData } from "../store/data/dataSlice";
import { StatusData } from "../types/data.enum";

const MapsPage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { data } = useAppSelector((state) => state.data);
	const [status, setStatus] = useState<StatusData>(StatusData.LOAD);

	const { language, order, displayName } = useAppSelector(
		(state) => state.filters,
	);

	useEffect(() => {
		setStatus(StatusData.LOADING);
		getMapsApi({
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
			{status === "loading" ? <h1>Loading...</h1> : <MapsCards data={data} />}
		</>
	);
};

export default MapsPage;
