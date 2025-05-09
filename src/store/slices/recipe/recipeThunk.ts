import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRequestThunk = createAsyncThunk<
    object,
    void,
    { rejectValue: string }
>("recipe/getRequestThunk", async (_, { rejectWithValue }) => {
    try {
        // return apiCall();
        return {};
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue(
            "An unexpected error occurred while fetching cameras"
        );
    }
});
