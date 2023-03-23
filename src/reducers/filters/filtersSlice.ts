import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import counterSlice from "../counter/counterSlice";

interface FiltersState {
    displayName?: string;
    order?: string;
    language?: string;
    role?: string;
}

const initialState: FiltersState = {
    displayName: "",
    orderASC: true,
    language: "en-US",
};

export const counterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeDisplayName: (state, action: PayloadAction<FiltersState>) => {
            console.log(action);
            state.displayName = action.payload.displayName;
        },
        changeOrder: (state, action: PayloadAction<FiltersState>) => {
            console.log(action);
            state.order = action.payload.order;
        },
        changeLanguage: (state, action: PayloadAction<FiltersState>) => {
            console.log(action);
            state.language = action.payload.language;
        },
    },
});

export const { changeDisplayName, changeOrder, changeLanguage } =
    counterSlice.actions;

export default counterSlice.reducer;
