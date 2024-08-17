import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({

    devTools: process.env.NODE_ENV !== "production",
    reducer: {
        posts: postReducer,
        users: usersReducer,
    },
});
