import { configureStore } from "@reduxjs/toolkit";
import { reviewSlice } from "./slice/reviewSlice";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: { user: userSlice.reducer, review: reviewSlice.reducer },
  // devTools: true,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
