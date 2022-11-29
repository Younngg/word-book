import React, { useRef, ComponentProps } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { addTopic } from '../../store/topics';
import { useAppDispatch } from './../../store/hooks';
import { showSnackbar } from './../../store/snackbar';

const TopicAddForm: React.FC<any> = ({ topicRepository }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.userSlice.userId);

  const topicRef = useRef<HTMLInputElement>(null);

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    if (topicRef.current) {
      const topic = topicRef.current.value;
      const id = Date.now();
      topicRepository.saveTopic(userId, { topic, id });
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
    <Form onSubmit={handleSubmit}>
      <input type='text' ref={topicRef} placeholder='topic' required />
      <button>Add</button>
    </Form>
  );
};

export default TopicAddForm;

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
