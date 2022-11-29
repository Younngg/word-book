import React from 'react';
import styled from 'styled-components';
import TopicList from './../components/TopicList/TopicList';
import TopicAddForm from './../components/TopicAddForm/TopicAddForm';
import TopicRepository from './../service/topicRepository';

const topicRepository = new TopicRepository();

const Home = () => {
  return (
    <>
      <Container>
        <h2>Topics</h2>
        <TopicAddForm topicRepository={topicRepository} />
        <TopicList topicRepository={topicRepository} />
      </Container>
    </>
  );
};

export default Home;

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
