import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../utils/types";

const initialState = [] as unknown as [UserData];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{
        user: UserData;
      }>
    ) => {
      if (!state.find((user) => user.id === action.payload.user.id)) {
        state.push(action.payload.user);
      }
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
