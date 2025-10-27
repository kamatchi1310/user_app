import { PayloadAction } from "@reduxjs/toolkit";
import {
  createUserResponseTypes,
  FetchUserPayload,
  UpdateUserResponseTypes,
  UserReducerState,
} from "../../Types";

export const fetchUserFulfilled = (
  state: UserReducerState,
  action: PayloadAction<FetchUserPayload>
) => {
  const { user } = action.payload;
  console.log(user);
  state.userList = user.data;
  state.loader = false;
  state.totalPages = user.total_pages;
};
export const fetchUserPending = (state: UserReducerState) => {
  state.loader = true;
};
export const fetchUserRejected = (state: UserReducerState) => {
  state.loader = false;
};

export const updateUserFulfilled = (
  state: UserReducerState,
  action: PayloadAction<UpdateUserResponseTypes>
) => {
  state.loader = false;
  // update data in userList without call api
  state.userList = state.userList.map((user) =>
    user.id === action.payload.id
      ? { id: user.id, ...action.payload.userData }
      : user
  );
};
export const updateUserPending = (state: UserReducerState) => {
  state.loader = true;
};
export const updateUserRejected = (state: UserReducerState) => {
  state.loader = false;
};

export const createUserFulfilled = (
  state: UserReducerState,
  action: PayloadAction<createUserResponseTypes>
) => {
  state.loader = false;
  state.userList.unshift(action.payload.user);
};
export const createUserPending = (state: UserReducerState) => {
  state.loader = true;
};
export const createUserRejected = (state: UserReducerState) => {
  state.loader = false;
};

export const deleteUserFulfilled = (
  state: UserReducerState,
  action: PayloadAction<{ user: any; id: number }>
) => {
  state.loader = false;
  state.userList = state.userList.filter(
    (user) => user.id !== action.payload.id
  );
};
export const deleteUserPending = (state: UserReducerState) => {
  state.loader = true;
};
export const deleteUserRejected = (state: UserReducerState) => {
  state.loader = false;
};
