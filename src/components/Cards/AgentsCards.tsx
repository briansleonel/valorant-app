import { Link } from "react-router-dom";
import { agentsApi } from "../../api/agents.api";
import { IAgentApi } from "../../types/agents";

interface Props {
    data: Array<IAgentApi> | null
}

interface PropsAgentCard {
    agent: IAgentApi;
}

const AgentsCards = ({ data }: Props) => {

    return (
        <section>
            {data!.length !== 0
                ? data!.map((element) => {
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
        <div>
            <img src={agent.displayIconSmall} alt={agent.displayName} />
            <h3> {agent.displayName} </h3>
            <p> {agent.role !== null ? agent.role.displayName : "None"} </p>
        </div>
    );
};

export default AgentsCards;