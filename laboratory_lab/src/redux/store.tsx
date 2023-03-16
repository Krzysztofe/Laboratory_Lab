import { configureStore } from "@reduxjs/toolkit";
import reactionsContactSlice from "./storeFeatures/reactionsContactSlice";
import { reactionsApiSlice } from "../services/apiSlice";
import tableReactionsSlice from "./storeFeatures/tableReactionsSlice";

export const store = configureStore({
  reducer: {
    reactionsContact: reactionsContactSlice,
    tableReactions: tableReactionsSlice,
    [reactionsApiSlice.reducerPath]: reactionsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reactionsApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
