import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user";

/**
 * Global store that contains all app level state
 */
const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

/**
 * Type of the global store
 */
export type StoreType = typeof store;
export type RootStateType = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export default store;
