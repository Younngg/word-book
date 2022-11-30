import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import TopicItem from '../TopicItem/TopicItem';
import { useAppDispatch } from './../../store/hooks';
import { offSyncTopics, saveTopics, syncTopics } from './../../store/topics';

const TopicList = () => {
  const topics = useAppSelector((state) => state.topicSlice);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.userSlice.userId);

  useEffect(() => {
    if (!userId) {
      return;
    }
    dispatch(
      syncTopics({
        userId,
        onUpdate: (topics: any) => {
          dispatch(saveTopics(topics));
        },
      })
    );

    return () => {
      dispatch(offSyncTopics(userId));
    };
  }, [dispatch, userId]);

  return (
    <Ul>
      {Object.keys(topics).map((key) => {
        return <TopicItem key={key} topic={topics[key]} />;
      })}
    </Ul>
  );
};

export default TopicList;

const Ul = styled.ul`
  width: 90%;
  margin-top: 1.5rem;
`;
