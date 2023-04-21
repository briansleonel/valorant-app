import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, ENDPOINTS_API } from "../api/base.api";

export const valorantApi = createApi({
    reducerPath: "valorantApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getAgents: builder.query({
            query: (language) => {
                const query = `${ENDPOINTS_API.agents}?language=${language}&isPlayableCharacter=true`;
                console.log(`Fetch data: ${BASE_URL}${query}`);
                return query;
            },
        }),
        getMaps: builder.query({
            query: (language) => {
                const query = `${ENDPOINTS_API.maps}?language=${language}`;
                console.log(`Fetch data: ${BASE_URL}${query}`);
                return query;
            },
        }),
        getGamemodes: builder.query({
            query: (language) => {
                const query = `${ENDPOINTS_API.gamemodes}?language=${language}`;
                console.log(`Fetch data: ${BASE_URL}${query}`);
                return query;
            },
        }),
    }),
});

export const { useGetAgentsQuery, useGetMapsQuery, useGetGamemodesQuery } =
    valorantApi;
