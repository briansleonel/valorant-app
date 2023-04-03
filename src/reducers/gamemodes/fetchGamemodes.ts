import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS_API } from "../../api/base.api";
import { baseRequestApi } from "../../api/generics/api.generic";
import { IFetchError, IRequestApi, IResponseApi } from "../../types/api";
import { IGamemodeApi } from "../../types/gamemodes";

const endpoint = ENDPOINTS_API.gamemodes;

export const fetchGamemodes = createAsyncThunk<
    IResponseApi<IGamemodeApi>,
    IRequestApi,
    { rejectValue: IFetchError }
>("maps/get", async (params, thunkApi): Promise<IResponseApi<IGamemodeApi>> => {
    /*const params: ParametersApi = {
        language: language || "en-US",
        isPlayableCharacter: true,
    };*/
    const res = await baseRequestApi<IGamemodeApi>({ params, endpoint });
    console.log(res);

    return res;
});