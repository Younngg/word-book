import { createSlice } from '@reduxjs/toolkit';

interface WordState {
  topic: string;
  word: string;
  mean: string;
  id: number;
}

const initialWordState: WordState[] = [];

export const wordSlice = createSlice({
  name: 'word',
  initialState: initialWordState,
  reducers: {
    addWord: (state, action) => {
      state.unshift({
        topic: action.payload.topic,
        word: action.payload.word,
        mean: action.payload.mean,
        id: action.payload.id,
      });
    },
    removeWord: (state, action) =>
      state.filter((word) => word.id !== action.payload),
  },
});

export const { addWord, removeWord } = wordSlice.actions;
