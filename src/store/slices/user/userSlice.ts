import { createSlice } from "@reduxjs/toolkit";
import { getRequestThunk } from "./userThunk";

export interface RecipeState {
    isLoading: boolean;
    data: null;
}

const initialState: RecipeState = {
    isLoading: false,
    data: null,
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRequestThunk.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export default recipeSlice.reducer;
