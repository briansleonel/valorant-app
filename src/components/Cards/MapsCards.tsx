import { Link } from "react-router-dom";
import { IMapApi } from "../../types/maps";

interface Props {
	data: Array<IMapApi> | null;
}

interface PropsMapCard {
	map: IMapApi;
}

const MapsCards = ({ data }: Props): JSX.Element => {
	return (
		<>
			{data !== null && data.length > 0
				? data.map((element) => {
						return (
							<Link to={"/"} key={element.uuid}>
								<MapCard map={element} />
							</Link>
						);
				  })
				: "No data"}
		</>
	);
};

const MapCard = ({ map }: PropsMapCard): JSX.Element => {
	return (
		<div>
			<img src={map.listViewIcon} alt={map.displayName} />
			<h3> {map.displayName} </h3>
		</div>
	);
};

export default MapsCards;
