import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from './../../store/hooks';
import { useState } from 'react';
import { removeWord, updateWordStatus } from '../../store/words';
import { useEffect } from 'react';

interface WordItemProps {
  word: { word: string; mean: string; id: number; status: boolean };
}

const WordItem: React.FC<WordItemProps> = ({ word }) => {
  const [isCompleted, setIsCompleted] = useState(word.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateWordStatus({ id: word.id, status: isCompleted }));
  }, [dispatch, isCompleted, word.id]);

  const handleClickComplete = () => {
    isCompleted ? setIsCompleted(false) : setIsCompleted(true);
    dispatch(updateWordStatus({ id: word.id, status: isCompleted }));
  };

  const handleDelete = (id: number) => {
    dispatch(removeWord(id));
  };

  return (
    <Li>
      <WordContainer>
        <p className='word'>{word.word}</p>
        <p className='mean'>{word.mean}</p>
      </WordContainer>
      <ButtonContainer>
        <CompleteButton
          isCompleted={isCompleted}
          onClick={() => {
            handleClickComplete();
          }}
        >
          {isCompleted ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </CompleteButton>
        <DeleteButton
          onClick={() => {
            handleDelete(word.id);
          }}
        >
          DEL
        </DeleteButton>
      </ButtonContainer>
    </Li>
  );
};

export default WordItem;

const Li = styled.li`
  width: 45%;
  height: 15rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  font-size: 20px;
  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }

  .word {
    font-size: 20px;
    margin-bottom: 0.5em;
  }
  .mean {
    font-size: 18px;
  }
`;

const WordContainer = styled.div`
  align-self: center;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-left: auto;
`;

const CompleteButton = styled.button<{ isCompleted: boolean }>`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 2rem;
  margin-left: 2rem;
  font-size: 12px;
  color: ${({ isCompleted }) => (isCompleted ? '#333' : '#fff')};
  background-color: ${({ isCompleted }) =>
    isCompleted ? '#f1f1f1' : '#81ecec'};
  &:hover {
    background-color: ${({ isCompleted }) =>
      isCompleted ? '#e9e9e9' : '#02deda'};
    transition: all 0.3s;
  }
`;

const DeleteButton = styled.button`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 2rem;
  margin-left: 2rem;
  font-size: 12px;
  color: #333;
  background-color: #f1f1f1;
  &:hover {
    background-color: #e9e9e9;
  }
`;
