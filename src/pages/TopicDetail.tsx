import React from 'react';
import { useLocation } from 'react-router-dom';
import WordList from './../components/WordList/WordList';

const TopicDetail = () => {
  const location = useLocation();
  const topicName = location.state.name;

  return (
    <div>
      <WordList topic={topicName} />
    </div>
  );
};

export default TopicDetail;
