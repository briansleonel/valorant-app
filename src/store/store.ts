import { Middleware, configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filters/filtersSlice";
import { valorantApi } from "../services/data";

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
        filters: filtersSlice,
        //data: dataSlice,
        [valorantApi.reducerPath]: valorantApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(valorantApi.middleware),
    //.concat(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
