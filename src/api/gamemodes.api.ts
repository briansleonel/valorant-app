import { ParametersApi, ResponseApi } from "../types/api";
import { IGamemodeApi } from "../types/gamemodes";
import { IMapApi } from "../types/maps";
import { ENDPOINTS_API, __instanceAxios } from "./base.api";
import { baseRequestApi } from "./generics/api.generic";

const endpoint = ENDPOINTS_API.gamemodes;

export const gamemodesApi = {
    getAll: function (params: ParametersApi): Promise<ResponseApi<IGamemodeApi>> {
        return baseRequestApi<IGamemodeApi>({ params, endpoint });
    },
    getByID: function ({ language, uuid }: ParametersApi) {
        return __instanceAxios.get(`${endpoint}/${uuid}`, {
            params: {
                language,
            },
        });
    },
};