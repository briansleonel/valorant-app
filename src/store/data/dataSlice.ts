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
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload.data;
        },
        findDataByDisplayName: (state, action) => {
            const { displayName, data } = action.payload;

            const regexp = new RegExp(`^${action.payload.displayName}`, "i");

            const dataUpdate = data.data.filter((val: IAgentApi) => {
                if (regexp.test(val.displayName)) {
                    return val;
                }
            });

            state.data = dataUpdate;
        },
        orderData : (state, action) => {
            state.data = state.data.sort(function (a, b) {
                if (a.displayName > b.displayName) {
                    return 1;
                }
                if (a.displayName < b.displayName) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
        }
    },
});

export const selectStatusData = (state: RootState) => state.data.status;

export const { setData, findDataByDisplayName } = dataSlice.actions;

export default dataSlice.reducer;
