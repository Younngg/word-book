import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from './../service/authService';

const authService = new AuthService();
const initialUserState = { userId: '' };

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (providerName: string) => {
    const result = await authService.login(providerName);
    return result.user.uid;
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  authService.logout();
});

export const onAuthChange = createAsyncThunk(
  'user/onAuthChange',
  async (onUserChanged: any) => {
    authService.onAuthChange(onUserChanged);
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    saveUser: (state, action) => {
      return { userId: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        return { userId: action.payload };
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        return { userId: '' };
      })
      .addCase(onAuthChange.fulfilled, (state, action) => {});
  },
});

export const { saveUser } = userSlice.actions;
