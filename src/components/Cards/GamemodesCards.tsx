import { IGamemodeApi } from "../../types/gamemodes";
import {
    CardContainer,
    CardContent,
    CardImg,
    CardText,
    CardTitleNormal,
} from "./Card";

interface Props {
    data: Array<IGamemodeApi> | null;
}

interface PropsGamemode {
    gamemode: IGamemodeApi;
}

const GamemodesCards = ({ data }: Props): JSX.Element => {
    return (
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tw-px-4 tw-pb-2 sm:tw-pt-0 sm:tw-px-10 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-5 ">
            {data !== null && data.length > 0
                ? data.map((element) => {
                      return <GameMode key={element.uuid} gamemode={element} />;
                  })
                : "No data"}
        </div>
    );
};

const GameMode = ({ gamemode }: PropsGamemode) => {
    return (
        <CardContainer>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <CardContent>
                <CardImg
                width="80%"
                    src={
                        gamemode.displayIcon !== null
                            ? gamemode.displayIcon
                            : "/not-availiable-image.png"
                    }
                    alt={gamemode.displayName}
                />
                <CardTitleNormal className="!tw-mt-2"> {gamemode.displayName} </CardTitleNormal>
                <CardText>{gamemode.duration}</CardText>
            </CardContent>
        </CardContainer>
    );
};

export default GamemodesCards;
