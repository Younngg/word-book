import { createSlice } from '@reduxjs/toolkit';

interface TopicState {
  topic: string;
  id: number;
}
const initialTopicState: TopicState[] = [];

export const topicSlice = createSlice({
  name: 'topic',
  initialState: initialTopicState,
  reducers: {
    addTopic: (state, action) => {
      state.unshift({
        topic: action.payload.topic,
        id: action.payload.id,
      });
    },
    removeTopic: (state, action) =>
      state.filter((topic) => topic.id !== action.payload),
  },
});

export const { addTopic, removeTopic } = topicSlice.actions;
