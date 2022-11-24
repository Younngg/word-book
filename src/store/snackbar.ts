import { createSlice } from '@reduxjs/toolkit';

interface SnackbarState {
  message: string;
  id: number;
}
const initialTopicState: SnackbarState[] = [];

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: initialTopicState,
  reducers: {
    showSnackbar: (state, action) => {
      state.unshift({
        message: action.payload.message,
        id: action.payload.id,
      });
    },
    closeSnackbar: (state, action) =>
      state.filter((bar) => bar.id === action.payload),
  },
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;
