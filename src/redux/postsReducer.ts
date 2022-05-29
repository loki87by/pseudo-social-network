import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../utils/types";

const initialState = [] as unknown as [Message];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (
      state,
      action: PayloadAction<{
        post: Message;
      }>
    ) => {
      if (
        !state.find(post => post.id === action.payload.post.id)) {
        state.push(action.payload.post);
      }
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
