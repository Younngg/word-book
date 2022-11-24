import React, { useRef, ComponentProps } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../store/hooks';
import { addTopic } from '../store/topics';
import Topic from './../components/Topic/Topic';
import { useAppDispatch } from './../store/hooks';
import { showSnackbar } from '../store/snackbar';

const Home = () => {
  const topics = useAppSelector((state) => state.topicSlice);

  const dispatch = useAppDispatch();

  const topicRef = useRef<HTMLInputElement>(null);

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();

    if (topicRef.current) {
      const topic = topicRef.current.value;
      const id = Date.now();

      dispatch(addTopic({ topic, id }));
      dispatch(
        showSnackbar({
          message: `${topic} 이(가) 추가되었습니다.`,
          color: 'green',
        })
      );
      topicRef.current.value = '';
    }
  };

  return (
    <>
      <Container>
        <h2>Topics</h2>
        <Form onSubmit={handleSubmit}>
          <input type='text' ref={topicRef} placeholder='topic' required />
          <button>Add</button>
        </Form>
        <Ul>
          {topics.map((topic) => {
            return <Topic key={topic.id} name={topic.topic} id={topic.id} />;
          })}
        </Ul>
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

const Form = styled.form`
  padding: 1rem;
  & input {
    width: 20rem;
    height: 2rem;
    text-indent: 1rem;
    border: 1px solid #ccc;
    margin-right: 0.5rem;
  }
  & button {
    width: 4rem;
    height: 2.1rem;
    border: none;
    background-color: #00b894;
    color: #fff;
  }
`;

const Ul = styled.ul`
  width: 90%;
  margin-top: 1.5rem;
`;
