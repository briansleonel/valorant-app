import { Link } from "react-router-dom";
import { agentsApi } from "../../api/agents.api";
import { IAgentApi } from "../../types/agents";
import { BaseObject } from "../../types/api";
import { IGamemodeApi } from "../../types/gamemodes";
import { IMapApi } from "../../types/maps";

interface Props<T> {
    data: Array<T> | null;
    endpoint: string;
}

interface PropsAgentCard {
    agent: IAgentApi;
}

interface PropsMapCard {
    map: IMapApi;
}

interface PropsGamemodeCard {
    gamemode: IGamemodeApi;
}
/*
export function CardsGroup <T extends BaseObject> ({ data, endpoint }: Props<T>) {

    const cards = () => {
        switch(endpoint) {
            case "agents":
                return data!.map((element) => {
                    //if (element.role != null) {
                    if (element.uuid !== agentsApi.uuidAgentRepeat) {
                        return (
                            <Link to={"/"} key={element.uuid}>
                                <AgentCard agent={element} />
                            </Link>
                        );
                    }
                })
                case "maps":
                    return data!.map((element) => {
                        //if (element.role != null) {
                        if (element.uuid !== agentsApi.uuidAgentRepeat) {
                            return (
                                <Link to={"/"} key={element.uuid}>
                                    <MapCard map={element} />
                                </Link>
                            );
                        }
                    })
        }
    }

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

const MapCard = ({ map }: PropsMapCard) => {
    return (
        <div>
            <img src={map.listViewIcon} alt={map.displayName} />
            <h3> {map.displayName} </h3>
        </div>
    );
};

const GamemodeCard = ({ gamemode }: PropsGamemodeCard) => {
    return (
        <div>
            <img src={gamemode.displayIcon} alt={gamemode.displayName} />
            <h3> {gamemode.displayName} </h3>
            <p>Duration: {gamemode.duration} </p>
        </div>
    );
};

*/
