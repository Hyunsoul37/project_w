import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useFetch from "../customHooks/useFetch";

const initialState = {
  isloadding: false,
  isSuccess: false,
  isError: "",
  isfinish: false,
  post: [],
};
const Delay = (data, curpage) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let newlist = [];
      for (let i = curpage * 12; i < curpage * 12 + 12; i++) {
        if (data[i]) {
          newlist.push(data[i]);
        }
      }
      res(newlist);
    }, 5000);
  });
};
export const TestDelayGetReview = createAsyncThunk(
  "review/getTest",
  async ({ data, curpage }) => {
    let newlist = [];
    await Delay(data, curpage).then((res) => (newlist = res));

    return newlist;
  }
);

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
      })
      .addCase(TestDelayGetReview.pending, (state, action) => {
        state.isloadding = true;
      })
      .addCase(TestDelayGetReview.fulfilled, (state, action) => {
        state.isloadding = false;

        const arr = action.payload;
        if (arr.length < 12) {
          state.isfinish = true;
        }
        state.post = [...state.post, ...arr];
      })
      .addCase(TestDelayGetReview.rejected, (state, action) => {
        state.isloadding = false;
        state.isError = action.error;
      });
  },
});
export const { TestGetReview, PushReview } = reviewSlice.actions;
