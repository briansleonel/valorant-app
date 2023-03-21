import { configureStore } from "@reduxjs/toolkit";
import agentsSlice from "../reducers/agents/agentsSlice";
import counterSlice from "../reducers/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter : counterSlice,
        agents: agentsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;