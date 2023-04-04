import { reviewState } from "./../components/community/ReviewTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface reviewSliceState {
  isloadding: boolean;
  isSuccess: boolean;
  isError: string | null;
  post: reviewState[];
  TotalpageNum: number;
}
interface ReviewState extends reviewSliceState {
  status: "loading" | "succeeded" | "failed";
}

const initialState: ReviewState = {
  isloadding: false,
  isSuccess: false,
  status: "loading",
  isError: "",
  post: [],
  TotalpageNum: 0,
};

export const NextGetReview = createAsyncThunk(
  "review/Addlist",
  async (curpage: number) => {
    let newlist: reviewState[] = [];
    await axios
      .get(`/api/community/review?page=${curpage}`)
      .then((res) => {
        res.data.data.map((data: reviewState) => newlist.push(data));
      })
      .catch((err) => console.log(err));
    return newlist;
  }
);

export const GetReview = createAsyncThunk("review/get", async () => {
  const newlist: reviewState[] = [];
  let pagenum: number = 0;
  await axios
    .get(`/api/community/review?page=1`)
    .then((res) => {
      res.data.data.map((data: reviewState) => newlist.push(data));
    })
    .catch((err) => console.log(err));
  await axios
    .get("/api/community/review/last-page")
    .then((res) => (pagenum = res.data.data))
    .catch((err) => console.log(err));
  return { newlist, pagenum };
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
        state.post = action.payload.newlist;
        state.TotalpageNum = action.payload.pagenum;
      })
      .addCase(GetReview.rejected, (state, action) => {
        state.status = "loading";
        state.isloadding = false;
        state.isSuccess = false;
        state.isError = action.error.message ? action.error.message : "";
      })
      .addCase(NextGetReview.pending, (state, action) => {
        state.isloadding = true;
      })
      .addCase(NextGetReview.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isloadding = false;
        const arr = action.payload;
        arr.map((data) => state.post.push(data));
      })
      .addCase(NextGetReview.rejected, (state, action) => {
        state.status = "failed";
        state.isloadding = false;
        state.isError = action.error.message ? action.error.message : "";
      });
  },
});
export const { TestGetReview, PushReview } = reviewSlice.actions;
export const selectReviews = (state: RootState) => state.review.post;
export const selectStatus = (state: RootState) => state.review.status;
