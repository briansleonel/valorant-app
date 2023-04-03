import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS_API } from "../../api/base.api";
import { baseRequestApi } from "../../api/generics/api.generic";
import { IAgentApi } from "../../types/agents";
import { IFetchError, IRequestApi, IResponseApi } from "../../types/api";

const endpoint = ENDPOINTS_API.agents;

/*
    1° Argumento: Nombre del action
    2° Argumento: Funcion que contiene la logica asincrona
    3° Argumento: 
*/
export const fetchAgents = createAsyncThunk<
    IResponseApi<IAgentApi>,
    IRequestApi,
    { rejectValue: IFetchError }
>("agents/get", async (params, thunkApi): Promise<IResponseApi<IAgentApi>> => {
    const res = await baseRequestApi<IAgentApi>({ params, endpoint });
    /*
    if (res.status !== 200) {
        // Return the error message:
        return thunkApi.rejectWithValue({ 
          message: "Failed to fetch todos." 
        });
      }
      */
    return res;
});

function fetchData<Type>(type: string, params: IRequestApi) {
    return createAsyncThunk<IResponseApi<Type>, IRequestApi, {}>(
        type,
        async () => {
            return await baseRequestApi<Type>({
                params,
                endpoint,
            });
        }
    );
}

/*
export const fetchAgents = createAsyncThunk<ResponseApi<IAgentApi>>("agents/get", async (params: ParametersApi) => {
    const res = await baseRequestApi<IAgentApi>({ params, endpoint });
    return res;
})
*/
