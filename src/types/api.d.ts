import { IAgentApi } from "./agents";
import { GamemodeApi } from "./gamemodes";
import { IMapApi } from "./maps";

export interface ResponseApi<T> {
    status: number;
    data: Array<T>;
}

interface ParametersApi {
    language: string;
    uuid?: string;
    isPlayableCharacter?: boolean;
}

interface BaseObject {
    uuid: string;
    displayName: string;
}
/*
export type AgentsResponseApi = {
    status: number;
    data: Array<IAgenteApi>;
};
*/
