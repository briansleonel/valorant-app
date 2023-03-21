import { ParametersApi, ResponseApi } from "../../types/api";
import { __instanceAxios } from "../base.api";

export async function baseRequestApi<Type>({
    params,
    endpoint,
}: {
    params: ParametersApi;
    endpoint: string;
}): Promise<ResponseApi<Type>> {
    const { data } = await __instanceAxios.get<ResponseApi<Type>>(endpoint, {
        params: {
            language: params.language,
            uuid: params.uuid,
        },
    });
    return data;
}
