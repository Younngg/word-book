import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import WordRepository from './../service/wordRepository';

const wordRepository = new WordRepository();

interface WordState {
  topic: string | number;
  word: string;
  mean: string;
  id: number;
  status: boolean;
}

const initialWordState: any = {};

export const addWord = createAsyncThunk<
  Promise<{ userId: any; word: any }>,
  {
    userId: any;
    word: any;
  }
>('word/addWord', async ({ userId, word }) => {
  wordRepository.saveWord(userId, word);
  return { userId, word };
});

export const removeWord = createAsyncThunk<
  Promise<{ userId: any; word: any }>,
  {
    userId: any;
    word: any;
  }
>('word/removeWord', async ({ userId, word }) => {
  wordRepository.removeWord(userId, word);
  return { userId, word };
});

export const syncWords = createAsyncThunk<
  Promise<void>,
  {
    userId: any;
    topicId: any;
    onUpdate: any;
  }
>('words/syncWords', async ({ userId, topicId, onUpdate }) => {
  wordRepository.syncWords(userId, topicId, onUpdate);
});

export const offSyncWords = createAsyncThunk<
  Promise<void>,
  {
    userId: any;
    topicId: any;
  }
>('words/offSyncWords', async ({ userId, topicId }) => {
  wordRepository.offSyncWords(userId, topicId);
});

export const wordSlice = createSlice({
  name: 'word',
  initialState: initialWordState,
  reducers: {
    saveWords: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWord.fulfilled, (state, action) => {})
      .addCase(removeWord.fulfilled, (state, action) => {})
      .addCase(syncWords.fulfilled, (state, action) => {});
  },
});

export const { saveWords } = wordSlice.actions;
