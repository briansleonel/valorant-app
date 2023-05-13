import AgentsCards from "../components/Cards/AgentsCards";
import { IAgentApi } from "../types/agents";
import { useData } from "../hooks/useData";

const AgentsPage = (): JSX.Element => {
	const { error, isLoading, viewData } = useData<IAgentApi>({
		endpoint: "agents",
	});

	return (
		<>
			<h6>Conoce al equipo</h6>
			<p>
				Descubre más formas de plantar la spike y dominar a tus enemigos con
				estos guerrilleros, estrategas y cazadores de diferentes estilos.
			</p>
			{error ? (
				<h4>Hubo un error</h4>
			) : isLoading ? (
				<h1>Loading...</h1>
			) : (
				<AgentsCards data={viewData} />
			)}
		</>
	);
};

export default AgentsPage;

/*
		--------- Para usar almacenamiento en la STORE Redux

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

/*
		----------- Para usar alamcenamiento de estado en el componente

		const { language, order, displayName } = useAppSelector(
			(state) => state.filters,
		);
		const { error, isLoading, data } = useGetAgentsQuery(language);

		const [viewData, setViewData] = useState<Array<IAgentApi>>([]);

		useEffect(() => {
			if (!isLoading) {
				setViewData(data.data);
			}
		}, [data]);

		useEffect(() => {
			if (displayName !== "" && displayName !== undefined) {
				const find = genericFindByDisplayName<IAgentApi>(displayName, data.data);
				setViewData(find);
				console.log(`Search by displayname: '${displayName}'`);
			}
		}, [displayName]);
	*/
