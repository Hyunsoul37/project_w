import {
  createAsyncThunk,
  createSlice,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "../util/cookiesController";
import axios from "axios";

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
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: data ? JSON.stringify(data) : null,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
  }
});

export const LogInmaintain = createAsyncThunk("user/maintain", async (data) => {
  try {
    const response = await fetch(`/api/auth/login-check`, {
      method: "GET",
      body: null,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `bearer ${data.token}`,
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
});

export const DataClear = createAsyncThunk("user/Clear", async (data) => {
  const response = await fetch("/api/member", {
    method: "DELETE",
  });
  const responseStatus = await response.status;
  console.log(responseStatus);
});

export const saveToken = (token, refreshToken, id) => {
  const today = new Date();
  // today.setDate(today.getDate() + 1); // 하루
  today.setMinutes(today.getMinutes() + 1); // 30분
  if (token === null) {
    console.log("token이 없습니다");
  } else {
    setCookie("token", token, {
      expires: today,
    });
    localStorage.setItem("refresh", refreshToken);
    localStorage.setItem("id", id);
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
      localStorage.removeItem("id");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LogIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isSuccess = true;
        state.userData = action.payload;
        saveToken(
          action.payload.data.token,
          action.payload.data.refreshToken,
          action.payload.data.memberInfo.pid
        );
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isLoginError = action.error;
        state.isSuccess = false;
        state.isLoggedIn = false;
      });

    builder
      .addCase(LogInmaintain.fulfilled, (state, action) => {
        if (action.payload.data.memberInfo) {
          state.isLoggedIn = true;
        } else {
          state.isLoggedIn = false;
        }
        state.userData.data.memberInfo = action.payload.data.memberInfo;
      })
      .addCase(LogInmaintain.rejected, (state, action) => {
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
