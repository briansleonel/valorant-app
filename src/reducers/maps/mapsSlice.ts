import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IMapApi } from "../../types/maps";
import { fetchMaps } from "./fetchMaps";

type MapsDataState = {
    // In `status` we will watch
    // if todos are being loaded.
    status: "loading" | "idle";

    // `error` will contain an error message.
    error: string | null;
    data: Array<IMapApi>;
};

const initialState: MapsDataState = {
    data: [],
    error: null,
    status: "idle",
};

const mapsSlice = createSlice({
    name: "maps",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchAgents.pending` is being fired:
        builder.addCase(fetchMaps.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchMaps.fulfilled, (state, { payload }) => {
            // We add all the new todos into the state
            // and change `status` back to `idle`:
            state.data = payload.data;

            state.status = "idle";
        });

        // When a server responses with an error:
        builder.addCase(fetchMaps.rejected, (state, { payload }) => {
            // We show the error message
            // and change `status` back to `idle` again.
            if (payload) state.error = payload.message;
            state.status = "idle";
        });
    },
});

export const selectStatusDataMaps = (state: RootState) => state.data.status;

export default mapsSlice.reducer;
