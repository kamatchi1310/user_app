import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ServerConfig } from "../../config";
import { UserServices } from "../../services/api/userServices";
import {
  createUserArgs,
  createUserResponseTypes,
  FetchUserArgs,
  FetchUserPayload,
  UpdateUserArgs,
  UpdateUserResponseTypes,
} from "../../Types";

export const fetchUser = createAsyncThunk<
  FetchUserPayload,
  FetchUserArgs,
  { rejectValue: string }
>("user-slice/fetchUser", async ({ per_page, page }, thunkAPI) => {
  try {
    const user = await UserServices.fetchUserList(per_page, page);
    return { user };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to fetch users"
    );
  }
});

export const updateUser = createAsyncThunk<
  UpdateUserResponseTypes,
  UpdateUserArgs,
  { rejectValue: string }
>("user-slice/updateUser", async ({ id, userData }, thunkAPI) => {
  try {
    const user = await UserServices.updateUser(id, userData);
    return { user, userData, id };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to update users"
    );
  }
});

export const createUser = createAsyncThunk<
  createUserResponseTypes,
  createUserArgs,
  { rejectValue: string }
>("user-slice/createUser", async ({ userData }, thunkAPI) => {
  try {
    const user = await UserServices.createUser(userData);
    return { user };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to create users"
    );
  }
});

export const deleteUser = createAsyncThunk<
  { user: any; id: number },
  { id: number },
  { rejectValue: string }
>("user-slice/deleteUser", async ({ id }, thunkAPI) => {
  try {
    const user = await UserServices.deleteUser(id);
    return { user, id };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to create users"
    );
  }
});
