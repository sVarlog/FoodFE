import { createSlice } from "@reduxjs/toolkit";
import { getRequestThunk } from "./recipeThunk";

export interface CamerasState {
    isLoading: boolean;
    data: null;
}

const initialState: CamerasState = {
    isLoading: false,
    data: null,
};

const camerasSlice = createSlice({
    name: "cameras",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRequestThunk.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export default camerasSlice.reducer;
