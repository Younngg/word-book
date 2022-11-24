import { createSlice } from '@reduxjs/toolkit';

interface SnackbarState {
  isShown: boolean;
  message: string;
}
const initialTopicState: SnackbarState[] = [];

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: initialTopicState,
  reducers: {
    showSnackbar: (state, action) => {
      state.unshift({
        isShown: action.payload.isShown,
        message: action.payload.message,
      });
    },
    closeSnackbar: (state, action) => {},
  },
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;
