import { configureStore } from "@reduxjs/toolkit";
import { reviewSlice } from "./slice/reviewSlice";
import { userSlice } from "./slice/userSlice";
import { wineSlice } from "./slice/wineSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    review: reviewSlice.reducer,
    wine: wineSlice.reducer,
  },
  // devTools: true,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
