import { configureStore } from "@reduxjs/toolkit";
import postReducers from '../features/posts/postSlice'

export const store = configureStore({

    devTools: process.env.NODE_ENV !== "production",
    reducer: {
        posts: postReducers,
    },
});
