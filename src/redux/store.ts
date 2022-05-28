import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
