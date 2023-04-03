import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS_API } from "../../api/base.api";
import { baseRequestApi } from "../../api/generics/api.generic";
import { IFetchError, IRequestApi, IResponseApi } from "../../types/api";
import { IMapApi } from "../../types/maps";

const endpoint = ENDPOINTS_API.maps;

export const fetchMaps = createAsyncThunk<
    IResponseApi<IMapApi>,
    IRequestApi,
    { rejectValue: IFetchError }
>("maps/get", async (params, thunkApi): Promise<IResponseApi<IMapApi>> => {
    /*const params: ParametersApi = {
        language: language || "en-US",
        isPlayableCharacter: true,
    };*/
    const res = await baseRequestApi<IMapApi>({ params, endpoint });
    console.log(res);

    return res;
});
