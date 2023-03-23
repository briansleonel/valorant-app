import { configureStore } from "@reduxjs/toolkit";
import agentsSlice from "../reducers/agents/agentsSlice";
import counterSlice from "../reducers/counter/counterSlice";
import filtersSlice from "../reducers/filters/filtersSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        agents: agentsSlice,
        filters: filtersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
