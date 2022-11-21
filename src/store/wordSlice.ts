import { createSlice } from '@reduxjs/toolkit';

interface WordState {
  word: string;
  mean: string;
  id: number;
}

const initialState: WordState[] = [];

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    add: (state, action) => {
      state.unshift({
        word: action.payload.word,
        mean: action.payload.mean,
        id: action.payload.id,
      });
    },
    remove: (state, action) =>
      state.filter((word) => word.id !== action.payload),
  },
});

export const { add, remove } = wordSlice.actions;
