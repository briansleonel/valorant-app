import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IAgentApi } from "../../types/agents";
import { fetchAgents } from "../agents/fetchAgents";
import { IState } from "../../types/api";
import { IMapApi } from "../../types/maps";
import { IGamemodeApi } from "../../types/gamemodes";

type DataState = {
    status: "loading" | "idle";
    error: string | null;
    data: [];
};

const initialState: DataState = {
    data: [],
    error: null,
    status: "idle",
};

const dataSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload.data;
        },
        findDataByDisplayName: (state, action) => {
            const locale = localStorage.getItem("__data__");

            if (action.payload.displayName !== undefined && locale !== null) {
                const regexp = new RegExp(
                    `^${action.payload.displayName}`,
                    "i"
                );
                
                const dataUpdate = JSON.parse(locale).filter(
                    (val: IAgentApi) => {
                        if (regexp.test(val.displayName)) {
                            return val;
                        }

                        /*
                        if (
                            val.displayName
                                .toLocaleLowerCase()
                                .includes(
                                    action.payload.displayName.toLocaleLowerCase()
                                )
                        )
                            return val;

                            */
                    }
                );

                state.data = dataUpdate;
            }
        },
    },
});

export const selectStatusData = (state: RootState) => state.data.status;

export const { setData, findDataByDisplayName } = dataSlice.actions;

export default dataSlice.reducer;
