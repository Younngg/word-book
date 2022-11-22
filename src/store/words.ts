import { createSlice } from '@reduxjs/toolkit';

interface WordState {
  topic: string;
  word: string;
  mean: string;
  id: number;
  status: boolean;
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
        status: action.payload.status,
      });
    },
    removeWord: (state, action) =>
      state.filter((word) => word.id !== action.payload),
    updateWordStatus: (state, action) => {
      const updatedWord = state.findIndex(
        (ele) => ele.id === action.payload.id
      );
      state[updatedWord].status = action.payload.status;
    },
  },
});

export const { addWord, removeWord, updateWordStatus } = wordSlice.actions;
