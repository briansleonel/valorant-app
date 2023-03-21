import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAgentApi } from "../../types/agents";

interface AgentsState {
    data: Array<IAgentApi> | null;
}

const initialState: AgentsState = {
    data: null,
};

export const agentsSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        load: (state, action: PayloadAction<AgentsState>) => {
            console.log(action);
            state = action.payload;
        },
    },
});

export const { load } = agentsSlice.actions;

export default agentsSlice.reducer;
