import { createSlice } from '@reduxjs/toolkit';

export interface Snackbar {
  message: string;
  color: 'green' | 'red' | '';
  isShowing: boolean;
}
const initialSnackbarState: Snackbar = {
  message: '',
  color: 'green',
  isShowing: false,
};

export const snackbarSlice = createSlice({
  name: 'topic',
  initialState: initialSnackbarState,
  reducers: {
    showSnackbar: (state, action) => {
      return {
        message: action.payload.message,
        isShowing: true,
        color: action.payload.color,
      };
    },
    hideSnackbar: (state) => {
      return {
        message: '',
        isShowing: false,
        color: '',
      };
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
