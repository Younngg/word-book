import { configureStore } from '@reduxjs/toolkit';
import { wordSlice } from './words';
import { topicSlice } from './topics';
import { snackbarSlice } from './snackbar';
import { userSlice } from './user';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    wordSlice: wordSlice.reducer,
    topicSlice: topicSlice.reducer,
    snackbarSlice: snackbarSlice.reducer,
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
