import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TopicRepository from './../service/topicRepository';

const topicRepository = new TopicRepository();

interface TopicState {
  topic: string;
  id: number;
}

const initialTopicState: any = {};

export const addTopic = createAsyncThunk<
  Promise<{ userId: any; topic: any }>,
  {
    userId: any;
    topic: any;
  }
>('topic/addTopic', async ({ userId, topic }) => {
  topicRepository.saveTopic(userId, topic);
  return { userId, topic };
});

export const removeTopic = createAsyncThunk<
  Promise<{ userId: any; topicId: any }>,
  {
    userId: any;
    topicId: any;
  }
>('topic/removeTopic', async ({ userId, topicId }) => {
  topicRepository.removeTopic(userId, topicId);
  return { userId, topicId };
});

export const syncTopics = createAsyncThunk<
  Promise<void>,
  {
    userId: any;
    onUpdate: any;
  }
>('topic/syncTopics', async ({ userId, onUpdate }) => {
  topicRepository.syncTopics(userId, onUpdate);
});

export const offSyncTopics = createAsyncThunk(
  'topic/offSyncTopics',
  async (userId: any) => {
    topicRepository.offSyncTopics(userId);
  }
);

export const topicSlice = createSlice({
  name: 'topic',
  initialState: initialTopicState,
  reducers: {
    saveTopics: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTopic.fulfilled, (state, action) => {})
      .addCase(removeTopic.fulfilled, (state, action) => {})
      .addCase(syncTopics.fulfilled, (state, action) => {});
  },
});

export const { saveTopics } = topicSlice.actions;
