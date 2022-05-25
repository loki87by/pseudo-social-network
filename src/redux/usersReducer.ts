import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../utils/types";

const initialState = [] as unknown as [UserData];
/* 
address:
city: "Gwenborough"
geo:
lat: "-37.3159"
lng: "81.1496"
[[Prototype]]: Object
street: "Kulas Light"
suite: "Apt. 556"
zipcode: "92998-3874"
[[Prototype]]: Object
company:
bs: "harness real-time e-markets"
catchPhrase: "Multi-layered client-server neural-net"
name: "Romaguera-Crona"
[[Prototype]]: Object
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org"
 */

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
      if (
        !state.find(user => user.id === action.payload.user.id)) {
        state.push(action.payload.user);
      }
    }
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
