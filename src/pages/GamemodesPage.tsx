import GamemodesCards from "../components/Cards/GamemodesCards";
import { useData } from "../hooks/useData";
import { IGamemodeApi } from "../types/gamemodes";

const GamemodesPage = (): JSX.Element => {
	const { error, isLoading, viewData } = useData<IGamemodeApi>({
		endpoint: "gamemodes",
	});

	return (
		<>
			{error ? (
				<h4>Hubo un error</h4>
			) : isLoading ? (
				<h1>Loading...</h1>
			) : (
				<GamemodesCards data={viewData} />
			)}
		</>
	);
};

export default GamemodesPage;

/*
	const dispatch = useAppDispatch();
	const dataState = useAppSelector((state) => state.data);

	const { language, order, displayName } = useAppSelector(
		(state) => state.filters,
	);

	const { error, isLoading, data } = useGetGamemodesQuery(language);

	useEffect(() => {
		if (!isLoading) {
			dispatch(setData(data));
		}
	}, [data]);

	useEffect(() => {
		if (displayName !== "") {
			dispatch(findDataByDisplayName({ displayName, data }));
			console.log(`Search by displayname: '${displayName}'`);
		}
	}, [displayName]);
	*/
