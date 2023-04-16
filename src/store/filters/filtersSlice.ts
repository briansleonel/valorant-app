import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    displayName?: string;
    order?: string;
    language: string;
    role?: string;
}

const initialState: FiltersState = {
    displayName: "",
    order: "A-Z",
    language: "en-US",
};

export const filtersSlice = createSlice({
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
    filtersSlice.actions;

export default filtersSlice.reducer;
