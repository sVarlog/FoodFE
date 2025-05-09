import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import recipeReducer from "./slices/recipe/recipeSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        recipes: recipeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
