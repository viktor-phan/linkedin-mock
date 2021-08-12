import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  user: any;
}
const initialState: UserState = {
  user: null,
};
//Dispatch an action to change the user
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; //Payload is the object that passed in with the action
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const {login, logout} = userSlice.actions
 
//Selector
export const selectUser = (state: UserState) => state.user.user;
export default userSlice.reducer;
