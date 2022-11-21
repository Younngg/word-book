import React from 'react';
import { ComponentProps } from 'react';
import { useRef } from 'react';
import { useAppSelector } from '../../store/hooks';
import { add, remove } from '../../store/wordSlice';
import { useAppDispatch } from './../../store/hooks';
import WordItem from './../WordItem/WordItem';

const WordList = () => {
  const words = useAppSelector((state) => state.wordSlice);
  const dispatch = useAppDispatch();

  const wordRef = useRef<HTMLInputElement>(null);
  const meanRef = useRef<HTMLInputElement>(null);

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    if (wordRef.current && meanRef.current) {
      dispatch(
        add({
          word: wordRef.current.value,
          mean: meanRef.current.value,
          id: Date.now(),
        })
      );
      wordRef.current.value = '';
      meanRef.current.value = '';
    }
  };

  const handleDelete = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={wordRef} placeholder='word' />
        <input type='text' ref={meanRef} placeholder='mean' />
        <button>Add</button>
      </form>
      <ul>
        {words.map((word) => {
          return (
            <WordItem key={word.id} word={word} handleDelete={handleDelete} />
          );
        })}
      </ul>
    </>
  );
};

export default WordList;
