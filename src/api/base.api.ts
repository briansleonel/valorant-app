import axios from "axios";

export const BASE_URL = "https://valorant-api.com/v1/";

export const ENDPOINTS_API = {
    agents: "agents",
    maps: "maps",
    gamemodes: "gamemodes",
    weapons: "weapons",
};

export interface IData {
    label: string;
    value: string;
}

export const languagesApi: Array<IData> = [
    {
        label: "Español MX",
        value: "es-MX",
    },
    {
        label: "Español ES",
        value: "es-ES",
    },
    {
        label: "Inglés",
        value: "en-US",
    },
    {
        label: "Francés",
        value: "fr-FR",
    },
    {
        label: "Italiano",
        value: "it-IT",
    },
    {
        label: "Alemán",
        value: "de-DE",
    },
    {
        label: "Coreano",
        value: "ko-KR",
    },
    {
        label: "Portugués",
        value: "pt-BR",
    },
];

export const orderItems: Array<IData> = [
    {
        label: "A-Z",
        value: "ASC",
    },
    {
        label: "Z-A",
        value: "DEC",
    },
];

// Establezco la instancia de axios para poder hacer consultas
export const __instanceAxios = axios.create({
    baseURL: BASE_URL,
});
