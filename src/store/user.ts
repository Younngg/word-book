import { createSlice } from '@reduxjs/toolkit';

const initialUserState = { userId: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      return { userId: action.payload };
    },
    logoutUser: (state) => {
      return { userId: '' };
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
