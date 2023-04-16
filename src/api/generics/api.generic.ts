import { IRequestApi, IResponseApi } from "../../types/api";
import { __instanceAxios } from "../base.api";

export async function baseRequestApi<Type>({
    params,
    endpoint,
}: {
    params: IRequestApi;
    endpoint: string;
}): Promise<IResponseApi<Type>> {
    const { data } = await __instanceAxios.get<IResponseApi<Type>>(endpoint, {
        params: {
            language: params.language,
            uuid: params.uuid,
        },
    });
    console.log(`Fetch data ${__instanceAxios.getUri() + endpoint}`);

    return data;
}
