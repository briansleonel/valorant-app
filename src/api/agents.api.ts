import { IAgentApi } from "../types/agents";
import { IRequestApi, IResponseApi } from "../types/api";
import { ENDPOINTS_API, __instanceAxios } from "./base.api";
import { baseRequestApi } from "./generics/api.generic";

const endpoint = ENDPOINTS_API.agents;

export const agentsApi = {
    getAll: function (params: IRequestApi): Promise<IResponseApi<IAgentApi>> {
        return baseRequestApi<IAgentApi>({ params, endpoint });
    },
    getByID: function ({ language, uuid }: IRequestApi) {
        return __instanceAxios.get(`${endpoint}/${uuid}`, {
            params: {
                language,
            },
        });
    },

    uuidAgentRepeat: "ded3520f-4264-bfed-162d-b080e2abccf9",
};

/*

async function ({ language }: ParametersApi): Promise<ResponseApi<IAgenteApi>> {
        const { data } = await __instanceAxios.get<ResponseApi<IAgenteApi>>(endpoint, {
            params: {
                language,
            },
        });
        return data;
        */

/*
async function ({
        language,
    }: Parameters): Promise<string | Array<AgentApi> | undefined> {
        try {
            const { data } = await instance.get<ApiResponse>(endpoint, {
                params: {
                    language,
                },
            });

            if (data.status === 200) {
                return data.data;
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Error message: ", error.message);
                return error.message;
            } else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    }
*/

/*

export const getAgents = async () => {
    const { data } = await axios.get<ApiResponse>(URL);

    if (data.status === 200) {
        const agents: Array<AgentApi> = data.data;

        console.log(agents);
    }
    /*
    axios
        .get<Api>(URL)
        .then((res) => {
            if(res.data.status === 200) {
                res.data.data.map(
                    agentData => {
                        let agent: Agent = {
                            uuid: agentData.uuid,
                            displayName: agentData.displayName,
    description: agentData.description,
    developerName: string;
                        };

                        return agent;
                    }
                )
            }
        })
        .then((err) => err);
        
};

*/
