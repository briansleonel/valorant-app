import { Link } from "react-router-dom";
import { IGamemodeApi } from "../../types/gamemodes";

interface Props {
    data: Array<IGamemodeApi> | null;
}

interface PropsGamemodeCard {
    gamemode: IGamemodeApi;
}

const GamemodesCards = ({ data }: Props): JSX.Element => {
    return (
        <section>
            {data!.length !== 0
                ? data!.map((element) => {
                      return (
                          <Link to={"/"} key={element.uuid}>
                              <GamemodeCard gamemode={element} />
                          </Link>
                      );
                  })
                : "No data"}
        </section>
    );
};

const GamemodeCard = ({ gamemode }: PropsGamemodeCard): JSX.Element => {
    return (
        <div>
            <img src={gamemode.displayIcon} alt={gamemode.displayName} />
            <h3> {gamemode.displayName} </h3>
            <p>Duration: {gamemode.duration} </p>
        </div>
    );
};

export default GamemodesCards;
