import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootStateType, StoreType } from "../store";
import { useSelector } from "react-redux";
import { useStore } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
const useAppStore: () => StoreType = useStore;
export { useAppDispatch, useAppSelector, useAppStore };
