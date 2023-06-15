import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
        profileImg: "",
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
  return await axios
    .post("/api/auth/login", data ? JSON.stringify(data) : null, {
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const LogInmaintain = createAsyncThunk("user/maintain", async (data) => {
  return await axios
    .get("/api/auth/login-check", {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `bearer ${data.token}`,
      },
      body: null,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
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
      .addCase(LogIn.pending, (state, action) => {
        state.isLoggingIn = true;
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        if (action.payload.data.message === "success") {
          state.isLoggedIn = true;
          state.isLoggingIn = false;
          state.isSuccess = true;
          state.userData = action.payload;
          saveToken(
            action.payload.data.token,
            action.payload.data.refreshToken,
            action.payload.data.memberInfo.pid
          );
        } else {
          alert("id 또는 password가 틀렸습니다.");
          state.isLoggedIn = false;
          state.isLoggingIn = false;
          state.isSuccess = false;
          state.userData = null;
        }
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isLoginError = action.error;
        state.isLoggingIn = false;
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
