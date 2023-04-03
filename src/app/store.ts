import { configureStore } from "@reduxjs/toolkit";
import agentsSlice from "../reducers/agents/agentsSlice";
import dataSlice from "../reducers/data/dataSlice";
import filtersSlice from "../reducers/filters/filtersSlice";
import gamemodesSlice from "../reducers/gamemodes/gamemodesSlice";
import mapsSlice from "../reducers/maps/mapsSlice";

export const store = configureStore({
    reducer: {
        agents: agentsSlice,
        filters: filtersSlice,
        data: dataSlice,
        maps: mapsSlice,
        gamemodes: gamemodesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
