import { Middleware, configureStore } from "@reduxjs/toolkit";
import agentsSlice from "./agents/agentsSlice";
import dataSlice from "./data/dataSlice";
import filtersSlice from "./filters/filtersSlice";
import gamemodesSlice from "./gamemodes/gamemodesSlice";
import mapsSlice from "./maps/mapsSlice";

const persistanceLocalStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        next(action);
        if (action.type === "agents/setData") {
            localStorage.setItem(
                "__data__",
                JSON.stringify(store.getState().data.data)
            );
            console.log("Persistence on LocalStorage");
        }
    };

export const store = configureStore({
    reducer: {
        agents: agentsSlice,
        filters: filtersSlice,
        data: dataSlice,
        maps: mapsSlice,
        gamemodes: gamemodesSlice,
    },
    middleware: [persistanceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
