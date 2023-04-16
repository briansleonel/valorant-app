import { useEffect, useState } from "react";
import AgentsCards from "../components/Cards/AgentsCards";
import { useAppDispatch, useAppSelector } from "../hooks/hooks-redux";
import { fetchAgents, getAgentsApi } from "../store/agents/fetchAgents";
import { IAgentApi } from "../types/agents";
import { findDataByDisplayName, setData } from "../store/data/dataSlice";

enum StatusData {
	LOAD = "load",
	LOADING = "loading",
}

const AgentsPage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { data } = useAppSelector((state) => state.data);
	const [status, setStatus] = useState<StatusData>(StatusData.LOAD);

	const { language, order, displayName } = useAppSelector(
		(state) => state.filters,
	);

	useEffect(() => {
		//console.log(typeof JSON.parse(localStorage.getItem("__data__")));

		setStatus(StatusData.LOADING);
		getAgentsApi({
			language: language,
			isPlayableCharacter: true,
		})
			.then((res) => {
				//setShowData(res.data);
				//localStorage.setItem("__data__", JSON.stringify(res.data));
				dispatch(setData(res));
				setStatus(StatusData.LOAD);
			})
			.catch((err) => console.log(err));

		console.log(`Change language to ${language}`);
	}, [language]);

	useEffect(() => {
		/*
		const locale = localStorage.getItem("__data__");
		if (displayName !== undefined && locale !== null) {
			const dataUpdate = JSON.parse(locale).filter((val: IAgentApi) => {
				if (
					val.displayName
						.toLocaleLowerCase()
						.includes(displayName.toLocaleLowerCase())
				)
					return val;
			});
			setShowData(dataUpdate);
			console.log(`Search by displayname: '${displayName}'`);
		}
		*/
		if (displayName !== "") {
			dispatch(findDataByDisplayName({ displayName }));
			console.log(`Search by displayname: '${displayName}'`);
		}
	}, [displayName]);

	//const regexp = new RegExp(`${displayName}*`, "i");

	return (
		<>
			{status === "loading" ? <h1>Loading...</h1> : <AgentsCards data={data} />}
		</>
	);
};

export default AgentsPage;
