import { reviewState } from "../components/community/ReviewTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useFetch from "../customHooks/useFetch";

const initialState = {
  isloadding: true,
  isSuccess: false,
  isError: "",
  post: [],
};

export const GetReview = createAsyncThunk("review/get", async (data) => {
  const { sendRequestData: getData } = useFetch();
  let reviewData = null;

  await getData({
    url: `review/get?page=${data.page}`,
    type: "GET",
    data: null,
    header: { "Content-Type": "text/plain" },
    AfterGetData: pushdata,
  });
  const pushdata = (data) => {
    reviewData = data;
  };
  return reviewData;
});

export const reviewSlice = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {
    TestGetReview: (state, action) => {
      state.post = action.payload;
    },
    PushReview: (state, action) => {
      const arr = action.payload;
      state.post = [...state.post, ...arr];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetReview.fulfilled, (state, action) => {
        state.isloadding = false;
        state.isSuccess = true;
        state.post = action.payload;
      })
      .addCase(GetReview.rejected, (state, action) => {
        state.isloadding = false;
        state.isSuccess = false;
        state.isError = action.error;
      });
  },
});
export const { TestGetReview, PushReview } = reviewSlice.actions;
