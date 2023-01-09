import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeCookie, setCookie } from '../util/cookiesController';

const initialState = {
  isLoggingIn: false,
  isSuccess: false,
  isError: '',
  isLoggedIn: false,
  userData: null,
};

export const LogIn = createAsyncThunk('user/logIn', async data => {
  const response = await fetch('/api/auth', {
    method: 'POST',
    body: data ? JSON.stringify(data) : null,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  });
  const responseData = await response.json();
  return responseData;
});

const saveToken = data => {
  if (data.token === null) {
    console.log(data.message);
  } else {
    // 쿠키에 저장
    setCookie('token', data.token);
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isLoggingIn = false;
      state.isError = '';
      state.userData = null;
      removeCookie('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(LogIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isSuccess = true;
        state.userData = action.payload;
        saveToken(action.payload);
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.isError = action.error;
        state.isSuccess = false;
        state.isLoggedIn = false;
      });

    builder
      .addMatcher(
        action => {
          return action.type.includes('/pending');
        },
        (state, action) => {
          state.isLoggingIn = true;
        }
      )
      .addMatcher(
        action => {
          return action.type.includes('/fulfilled' || '/rejected');
        },
        (state, action) => {
          state.isLoggingIn = false;
        }
      );
  },
});

export const { logout } = userSlice.actions;
