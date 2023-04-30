import axios from "axios";

export const BASE_URL = "https://valorant-api.com/v1/";

export const ENDPOINTS_API = {
    agents: "agents",
    maps: "maps",
    gamemodes: "gamemodes",
    weapons: "weapons",
};

export interface IData {
    description: string;
    value: string;
}

export const languagesApi: Array<IData> = [
    {
        description: "English",
        value: "en-US",
    },
    {
        description: "Spanish MX",
        value: "es-MX",
    },
    {
        description: "Spanish ES",
        value: "es-ES",
    },
    {
        description: "French",
        value: "fr-FR",
    },
    {
        description: "Italian",
        value: "it-IT",
    },
    {
        description: "Deutsch",
        value: "de-DE",
    },
    {
        description: "Korean",
        value: "ko-KR",
    },
    {
        description: "Portuguese",
        value: "pt-BR",
    },
];

export const orderItems: Array<IData> = [
    {
        description: "A-Z",
        value: "ASC",
    },
    {
        description: "Z-A",
        value: "DEC",
    },
];

// Establezco la instancia de axios para poder hacer consultas
export const __instanceAxios = axios.create({
    baseURL: BASE_URL,
});
