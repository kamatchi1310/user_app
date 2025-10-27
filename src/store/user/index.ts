import UserSlice from "./user-slice";
export * as UserReducerThunks from "./thunks";

export const UserReducerActions = UserSlice.actions;

export default UserSlice.reducer;
