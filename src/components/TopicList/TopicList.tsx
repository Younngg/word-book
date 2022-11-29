import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { syncTopics } from '../../store/topics';
import TopicItem from '../TopicItem/TopicItem';
import { useAppDispatch } from './../../store/hooks';

const TopicList: React.FC<any> = ({ topicRepository }) => {
  const topics = useAppSelector((state) => state.topicSlice);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.userSlice.userId);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = topicRepository.syncTopics(userId, (topics: any) =>
      dispatch(syncTopics(topics))
    );
    return () => stopSync();
  }, [dispatch, topicRepository, userId]);

  return (
    <Ul>
      {Object.keys(topics).map((key) => {
        return (
          <TopicItem
            key={key}
            name={topics[key].topic}
            id={topics[key].id}
            topicRepository={topicRepository}
          />
        );
      })}
    </Ul>
  );
};

export default TopicList;

const Ul = styled.ul`
  width: 90%;
  margin-top: 1.5rem;
`;
