import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IAgentApi } from "../../types/agents";
import { fetchAgents } from "../agents/fetchAgents";

type AgentsDataState = {
    // In `status` we will watch
    // if todos are being loaded.
    status: "loading" | "idle";

    // `error` will contain an error message.
    error: string | null;
    data: Array<IAgentApi>;
};

const initialState: AgentsDataState = {
    data: [],
    error: null,
    status: "idle",
};

const dataSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchAgents.pending` is being fired:
        builder.addCase(fetchAgents.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchAgents.fulfilled, (state, { payload }) => {
            // We add all the new todos into the state
            // and change `status` back to `idle`:
            state.data = payload.data;

            state.status = "idle";
        });

        // When a server responses with an error:
        builder.addCase(fetchAgents.rejected, (state, { payload }) => {
            // We show the error message
            // and change `status` back to `idle` again.
            if (payload) state.error = payload.message;
            state.status = "idle";
        });
    },
});

export const selectStatusData = (state: RootState) => state.data.status;

export default dataSlice.reducer;
