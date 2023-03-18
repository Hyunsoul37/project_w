import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "../util/cookiesController";

const initialState = {
  isLoggingIn: false,
  isSuccess: false,
  isLoginError: "",
  isClearError: "",
  isLoggedIn: false,
  userData: {
    message: "",
    data: {
      token: "",
      refreshToken: "",
      memberInfo: {
        pid: 0,
        nickName: "",
        userImage: "",
        address: "",
        email: "",
        phone: 0,
        regiDate: "",
        role: "",
      },
    },
  },
};

export const LogIn = createAsyncThunk("user/logIn", async (data) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    body: data ? JSON.stringify(data) : null,
    headers: { "Content-Type": "application/json;charset=UTF-8" },
  });
  const responseData = await response.json();
  return responseData;
});

export const DataClear = createAsyncThunk("user/Clear", async (data) => {
  const response = await fetch("/api/member", {
    method: "DELETE",
  });
  const responseStatus = await response.status;
  console.log(responseStatus);
});

const saveToken = (data) => {
  const today = new Date();
  // today.setDate(today.getDate() + 1); // 하루
  today.setMinutes(today.getMinutes() + 3); // 3분
  console.log(today);
  if (data.token === null) {
    console.log(data.message);
  } else {
    setCookie("token", data.token, {
      expires: today,
    });
    localStorage.setItem("refresh", data.refreshToken);
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isLoggingIn = false;
      state.isError = "";
      state.userData = null;
      removeCookie("token");
      localStorage.removeItem("refresh");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LogIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isSuccess = true;
        state.userData = action.payload;
        saveToken(action.payload);
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isLoginError = action.error;
        state.isSuccess = false;
        state.isLoggedIn = false;
      });

    builder
      .addCase(DataClear.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isSuccess = false;
        state.isLoggingIn = false;
        state.isError = "";
        state.userData = null;
      })
      .addCase(DataClear.rejected, (state, action) => {
        state.isClearError = action.error;
      });

    builder
      .addMatcher(
        (action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          state.isLoggingIn = true;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.includes("/fulfilled" || "/rejected");
        },
        (state, action) => {
          state.isLoggingIn = false;
        }
      );
  },
});

export const { logout } = userSlice.actions;
