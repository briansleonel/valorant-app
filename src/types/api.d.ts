import { IAgentApi } from "./agents";
import { GamemodeApi } from "./gamemodes";
import { IMapApi } from "./maps";

export interface IResponseApi<T> {
    status: number;
    data: Array<T>;
}

interface IRequestApi {
    language: string | "en-US";
    uuid?: string;
    isPlayableCharacter?: boolean;
}

interface BaseObject {
    uuid: string;
    displayName: string;
}

type IFetchError = {
    message: string;
};

export interface IState<T> {
    status: "loading" | "idle";
    error: string | null;
    data: Array<T>;
}
