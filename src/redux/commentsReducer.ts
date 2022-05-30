import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../utils/types";

const initialState = [] as unknown as [Comment];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: (
      state,
      action: PayloadAction<{
        comment: Comment;
      }>
    ) => {
      if (!state.find((comment) => comment.id === action.payload.comment.id)) {
        state.push(action.payload.comment);
      }
    },
    addNewComment: (
      state,
      action: PayloadAction<{
        postId: number;
        name: string;
        email: string;
        body: string;
        id: number;
      }>
    ) => {
      if (!state.find((comment) => comment.id === action.payload.id)) {
        const { postId, name, email, body, id } = action.payload;
        const newComment = { postId, name, email, body, id };
        state.push(newComment);
      }
    },
  },
});

export const { addComments, addNewComment } = commentsSlice.actions;
export default commentsSlice.reducer;
