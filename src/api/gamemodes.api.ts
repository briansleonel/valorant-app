import { IRequestApi, IResponseApi } from "../types/api";
import { IGamemodeApi } from "../types/gamemodes";
import { ENDPOINTS_API, __instanceAxios } from "./base.api";
import { baseRequestApi } from "./generics/api.generic";

const endpoint = ENDPOINTS_API.gamemodes;

export const gamemodesApi = {
    getAll: function (
        params: IRequestApi
    ): Promise<IResponseApi<IGamemodeApi>> {
        return baseRequestApi<IGamemodeApi>({ params, endpoint });
    },
    getByID: function ({ language, uuid }: IRequestApi) {
        return __instanceAxios.get(`${endpoint}/${uuid}`, {
            params: {
                language,
            },
        });
    },
};
