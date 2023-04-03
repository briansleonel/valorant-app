import { IRequestApi, IResponseApi } from "../types/api";
import { IMapApi } from "../types/maps";
import { ENDPOINTS_API, __instanceAxios } from "./base.api";
import { baseRequestApi } from "./generics/api.generic";

const endpoint = ENDPOINTS_API.maps;

export const mapsApi = {
    getAll: function (params: IRequestApi): Promise<IResponseApi<IMapApi>> {
        return baseRequestApi<IMapApi>({ params, endpoint });
    },
    getByID: function ({ language, uuid }: IRequestApi) {
        return __instanceAxios.get(`${endpoint}/${uuid}`, {
            params: {
                language,
            },
        });
    },
};
