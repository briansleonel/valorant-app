import { Link } from "react-router-dom";
import { agentsApi } from "../../api/agents.api";
import { IAgentApi } from "../../types/agents";

interface Props {
	data: Array<IAgentApi> | null;
}

interface PropsAgentCard {
	agent: IAgentApi;
}

const AgentsCards = ({ data }: Props) => {
	return (
		<section className="tw-grid tw-grid-cols-1 tw-gap-10 sm:tw-grid-cols-2 lg:tw-grid-cols-4 xl:gap-x-8">
			{data !== null && data.length > 0
				? data.map((element) => {
						//if (element.role != null) {
						if (element.uuid !== agentsApi.uuidAgentRepeat) {
							return (
								<Link to={"/"} key={element.uuid}>
									<AgentCard agent={element} />
								</Link>
							);
						}
				  })
				: "No data"}
		</section>
	);
};

const AgentCard = ({ agent }: PropsAgentCard) => {
	return (
		<div className="tw-w-full tw-overflow-hidden tw-rounded-md tw-bg-gray-200 tw-shadow-md tw-shadow-dark-600 hover:tw-shadow-blue hover:tw-shadow-lg tw-p-5">
			<img className="tw-rounded-md tw-border tw-border-gray-300 tw-w-full" src={agent.displayIconSmall} alt={agent.displayName} />
			<h3 className="tw-uppercase font-dinnextw05-bold tw-mt-2"> {agent.displayName} </h3>
			<p className="tw-mt-1 font-dinnextw05-medium tw-italic">
				{agent.role !== null && agent.role !== undefined
					? agent.role.displayName
					: "None"}{" "}
			</p>
		</div>
	);
};

export default AgentsCards;
