import { configureStore } from '@reduxjs/toolkit';
import { wordSlice } from './words';
import { topicSlice } from './topics';

export const store = configureStore({
  reducer: {
    wordSlice: wordSlice.reducer,
    topicSlice: topicSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
