import MapsCards from "../components/Cards/MapsCards";
import { useData } from "../hooks/useData";
import { IMapApi } from "../types/maps";

const MapsPage = (): JSX.Element => {
	const { error, isLoading, viewData } = useData<IMapApi>({
		endpoint: "maps",
	});

	return (
		<>
			{error ? (
				<h4>Hubo un error</h4>
			) : isLoading ? (
				<h1>Loading...</h1>
			) : (
				<MapsCards data={viewData} />
			)}
		</>
	);
};

export default MapsPage;

/*
	const dispatch = useAppDispatch();
	const dataState = useAppSelector((state) => state.data);

	const { language, order, displayName } = useAppSelector(
		(state) => state.filters,
	);

	const { error, isLoading, data } = useGetMapsQuery(language);

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
