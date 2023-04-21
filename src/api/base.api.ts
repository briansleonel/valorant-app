import axios from "axios";

export const BASE_URL = "https://valorant-api.com/v1/";

export const ENDPOINTS_API = {
    agents: "agents",
    maps: "maps",
    gamemodes: "gamemodes",
    weapons: "weapons",
};

export const lang = {
    english: "en-US",
    spanish_ES: "es-ES",
    spanish_MX: "es-MX",
    portuguese: "pt-BR",
};

interface ILanguage {
    description: string;
    value: string;
}

//interface IOrder extends ILanguage {}

export const languagesApi: Array<ILanguage> = [
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

export const orderItems: Array<ILanguage> = [
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
