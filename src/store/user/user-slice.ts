import { createSlice } from "@reduxjs/toolkit";
import * as Thunks from "./thunks";
import * as ThunkHandlers from "./thunk-handlers";
import { UserReducerState } from "../../Types";

const initialState: UserReducerState = {
  userList: [],
  totalPages: 0,
  per_page: 5,
  loader: false,
};

const UserSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    updateLoader(state, action) {
      state.loader = action.payload;
    },
  },
  extraReducers(builder) {
    // fetch user
    builder.addCase(
      Thunks.fetchUser.fulfilled,
      ThunkHandlers.fetchUserFulfilled
    );
    builder.addCase(Thunks.fetchUser.pending, ThunkHandlers.fetchUserPending);

    builder.addCase(Thunks.fetchUser.rejected, ThunkHandlers.fetchUserRejected);
    // update user
    builder.addCase(
      Thunks.updateUser.fulfilled,
      ThunkHandlers.updateUserFulfilled
    );
    builder.addCase(Thunks.updateUser.pending, ThunkHandlers.updateUserPending);
    builder.addCase(
      Thunks.updateUser.rejected,
      ThunkHandlers.updateUserRejected
    );
    // create user
    builder.addCase(
      Thunks.createUser.fulfilled,
      ThunkHandlers.createUserFulfilled
    );
    builder.addCase(Thunks.createUser.pending, ThunkHandlers.createUserPending);
    builder.addCase(
      Thunks.createUser.rejected,
      ThunkHandlers.createUserRejected
    );
    // delete user
    builder.addCase(
      Thunks.deleteUser.fulfilled,
      ThunkHandlers.deleteUserFulfilled
    );
    builder.addCase(Thunks.deleteUser.pending, ThunkHandlers.deleteUserPending);
    builder.addCase(
      Thunks.deleteUser.rejected,
      ThunkHandlers.deleteUserRejected
    );
  },
});

export default UserSlice;
