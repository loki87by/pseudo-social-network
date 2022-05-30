import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
