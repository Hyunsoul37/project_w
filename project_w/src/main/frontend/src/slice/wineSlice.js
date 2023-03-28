import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoadding: true,
  isSuccess: false,
  ListErrormsg: "",
  CountErrormsg: "",
  pageNum: -1,
  data: [
    {
      pid: -1,
      korName: "",
      engName: "",
      price: 0,
      type: 1,
      body: 1,
      acidity: 1,
      tannin: 1,
      sweet: 1,
      alcohol: "",
      country: "",
      region: "",
      desc: "",
      starPoint: 0,
      recommendedSnack: "",
      grapeVariety: "",
      like: false,
    },
  ],
};

export const GetList = createAsyncThunk("wine/GetList", async (data) => {
  const id = localStorage.getItem("id");
  try {
    const response = await fetch(
      `/api/product/wine/${id ? id : 0}/search${data.queryurl}`,
      {
        method: "GET",
        body: null,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
});

export const GetCount = createAsyncThunk("wine/GetCount", async (data) => {
  try {
    const response = await fetch(
      `/api/product/wine/count${data.counturl}
    `,
      {
        method: "GET",
        body: null,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(err);
  }
});

export const wineSlice = createSlice({
  name: "wine",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetList.pending, (state, action) => {
        state.isLoadding = true;
      })
      .addCase(GetList.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      })
      .addCase(GetList.rejected, (state, action) => {
        state.isSuccess = false;
        state.ListErrormsg = action.error;
      });

    builder
      .addCase(GetCount.fulfilled, (state, action) => {
        state.pageNum = action.payload.data;
      })
      .addCase(GetCount.rejected, (state, action) => {
        state.CountErrormsg = action.error;
      });
  },
});
