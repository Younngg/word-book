import { createSlice } from '@reduxjs/toolkit';

interface TopicState {
  topic: string;
  id: number;
}

const initialTopicState: any = {};

export const topicSlice = createSlice({
  name: 'topic',
  initialState: initialTopicState,
  reducers: {
    addTopic: (state, action) => {
      const newTopics = {
        ...state,
        [action.payload.id]: {
          topic: action.payload.topic,
          id: action.payload.id,
        },
      };
      console.log(newTopics);

      return newTopics;
    },
    removeTopic: (state, action) => {
      const newTopics = { ...state };
      delete newTopics[action.payload];
      return newTopics;
    },
    syncTopics: (state, action) => action.payload,
  },
});

export const { addTopic, removeTopic, syncTopics } = topicSlice.actions;
