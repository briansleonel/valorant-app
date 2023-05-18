import { Link } from "react-router-dom";
import { agentsApi } from "../../api/agents.api";
import { IAgentApi } from "../../types/agents";
import {
    CardBody,
    CardContainer,
    CardContent,
    CardImg,
    CardText,
    CardTitle,
} from "./Card";

interface IProps {
    data: Array<IAgentApi> | null;
}

interface PropsAgentCard {
    agent: IAgentApi;
}

const AgentCards = ({ data }: IProps) => {
    return (
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tw-p-4 tw-mb-6 sm:tw-px-10 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 ">
            {data !== null && data.length > 0
                ? data.map((element) => {
                      //if (element.role != null) {
                      if (element.uuid !== agentsApi.uuidAgentRepeat) {
                          return (
                              <Link
                                  to={`/agents/${element.uuid}`}
                                  key={element.uuid}
                              >
                                  <Agent agent={element} />
                              </Link>
                          );
                      }
                  })
                : "No data"}
        </div>
    );
};

const Agent = ({ agent }: PropsAgentCard) => {
    return (
        <CardContainer>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <CardContent>
                <CardImg src={agent.displayIconSmall} alt={agent.displayName} />
                <CardBody>
                    <CardTitle> {agent.displayName} </CardTitle>
                </CardBody>
                <CardText>
                    {agent.role !== null && agent.role !== undefined
                        ? `// ${agent.role.displayName}`
                        : "None"}
                </CardText>
            </CardContent>
        </CardContainer>
    );
};

export default AgentCards;
