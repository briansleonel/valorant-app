import axios from "axios";
import { ParametersApi, ResponseApi } from "../types/api";

export const BASE_URL = "https://valorant-api.com/v1/";

export const ENDPOINTS_API = {
    agents: "agents",
    maps: "maps",
    gamemodes: "gamemodes",
    weapons: "weapons",
};

export const languages = {
    english: "en-US",
    spanish_ES: "es-ES",
    spanish_MX: "es-MX",
    portuguese: "pt-BR",
};

// Establezco la instancia de axios para poder hacer consultas
export const __instanceAxios = axios.create({
    baseURL: BASE_URL,
});
