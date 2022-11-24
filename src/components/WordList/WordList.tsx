import React from 'react';
import styled from 'styled-components';
import { ComponentProps } from 'react';
import { useRef } from 'react';
import { useAppSelector } from '../../store/hooks';
import { addWord } from '../../store/words';
import { useAppDispatch } from './../../store/hooks';
import WordItem from './../WordItem/WordItem';
import { showSnackbar } from '../../store/snackbar';

interface WordListProps {
  topic: string;
}

const WordList: React.FC<WordListProps> = ({ topic }) => {
  const words = useAppSelector((state) => state.wordSlice).filter(
    (word) => word.topic === topic
  );
  const dispatch = useAppDispatch();

  const wordRef = useRef<HTMLInputElement>(null);
  const meanRef = useRef<HTMLInputElement>(null);

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    if (wordRef.current && meanRef.current) {
      const word = wordRef.current.value;
      dispatch(
        addWord({
          topic,
          word,
          mean: meanRef.current.value,
          id: Date.now(),
          status: false,
        })
      );
      dispatch(
        showSnackbar({
          message: `${word} 이(가) 추가되었습니다.`,
          color: 'green',
        })
      );
      wordRef.current.value = '';
      meanRef.current.value = '';
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type='text' ref={wordRef} placeholder='word' />
        <input type='text' ref={meanRef} placeholder='mean' />
        <button>Add</button>
      </Form>
      <Ul>
        {words.map((word) => {
          return <WordItem key={word.id} word={word} />;
        })}
      </Ul>
    </>
  );
};

export default WordList;

const Form = styled.form`
  padding: 1rem;
  & input {
    width: 15rem;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
