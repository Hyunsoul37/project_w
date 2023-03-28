import { reviewState } from "./../components/community/ReviewTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface reviewSliceState {
  isloadding: boolean;
  isSuccess: boolean;
  isError: string;
  isfinish: boolean;
  post: reviewState[];
}
const initialState: reviewSliceState = {
  isloadding: false,
  isSuccess: false,
  isError: "",
  isfinish: false,
  post: [],
};

export const NextGetReview = createAsyncThunk(
  "review/getTest",
  async (curpage: number) => {
    let newlist: reviewState[] = [];
    console.log(curpage);
    await axios
      .get(`/api/community/review?page=${curpage + 1}`)
      .then((res) => {
        res.data.data.map((data: reviewState) => newlist.push(data));
      })
      .catch((err) => console.log(err));
    return newlist;
  }
);

export const GetReview = createAsyncThunk("review/get", async () => {
  const newlist: reviewState[] = [];
  await axios
    .get(`/api/community/review?page=1`)
    .then((res) => {
      res.data.data.map((data: reviewState) => newlist.push(data));
    })
    .catch((err) => console.log(err));

  return newlist;
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
        state.isError = action.error.message ? action.error.message : "";
      })
      .addCase(NextGetReview.pending, (state, action) => {
        state.isloadding = true;
      })
      .addCase(NextGetReview.fulfilled, (state, action) => {
        state.isloadding = false;
        const arr = action.payload;

        if (arr.length < 12) {
          state.isfinish = true;
        }
        arr.map((data) => state.post.push(data));
      })
      .addCase(NextGetReview.rejected, (state, action) => {
        state.isloadding = false;
        state.isError = action.error.message ? action.error.message : "";
      });
  },
});
export const { TestGetReview, PushReview } = reviewSlice.actions;
