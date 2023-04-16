import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IState } from "../../types/api";
import { IGamemodeApi } from "../../types/gamemodes";
import { fetchGamemodes } from "./fetchGamemodes";

const initialState: IState<IGamemodeApi> = {
    data: [],
    error: null,
    status: "idle",
};

const gamemodesSlice = createSlice({
    name: "gamemodes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchAgents.pending` is being fired:
        builder.addCase(fetchGamemodes.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchGamemodes.fulfilled, (state, { payload }) => {
            // We add all the new todos into the state
            // and change `status` back to `idle`:
            state.data = payload.data;

            state.status = "idle";
        });

        // When a server responses with an error:
        builder.addCase(fetchGamemodes.rejected, (state, { payload }) => {
            // We show the error message
            // and change `status` back to `idle` again.
            if (payload) state.error = payload.message;
            state.status = "idle";
        });
    },
});

export const selectStatusDataGamemodes = (state: RootState) => state.data.status;

export default gamemodesSlice.reducer;
