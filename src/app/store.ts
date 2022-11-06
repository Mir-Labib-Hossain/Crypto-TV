import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import { baseApiSlice } from "./api/baseApiSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
