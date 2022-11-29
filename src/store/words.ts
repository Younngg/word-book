import { createSlice } from '@reduxjs/toolkit';

interface WordState {
  topic: string | number;
  word: string;
  mean: string;
  id: number;
  status: boolean;
}

const initialWordState: any = {};

export const wordSlice = createSlice({
  name: 'word',
  initialState: initialWordState,
  reducers: {
    addWord: (state, action) => {
      const newWords = {
        ...state,
        [action.payload.id]: {
          topic: action.payload.topicId,
          word: action.payload.word,
          mean: action.payload.mean,
          id: action.payload.id,
          status: action.payload.status,
        },
      };
      return newWords;
    },
    removeWord: (state, action) => {
      const newWords = { ...state };
      delete newWords[action.payload];
      return newWords;
    },
    updateWordStatus: (state, action) => {
      const newWords = { ...state };
      newWords[action.payload.id].status = action.payload.status;
      return newWords;
    },
    syncWords: (state, action) => action.payload,
  },
});

export const { addWord, removeWord, updateWordStatus, syncWords } =
  wordSlice.actions;
