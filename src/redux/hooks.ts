import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { store, RootState, AppDispatch } from "./store";

export const useAppDispatch = (): typeof store.dispatch =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
