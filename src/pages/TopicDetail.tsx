import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import WordList from './../components/WordList/WordList';

const TopicDetail = () => {
  const location = useLocation();
  const topicName = location.state.name;

  return (
    <Container>
      <h2>{topicName}</h2>
      <WordList topic={topicName} />
    </Container>
  );
};

export default TopicDetail;

const Container = styled.div`
  max-width: 1000px;
  min-height: 70vh;
  margin: 1.5rem auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
