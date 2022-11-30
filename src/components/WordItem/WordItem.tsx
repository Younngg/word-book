import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { removeWord } from '../../store/words';
import { showSnackbar } from '../../store/snackbar';

interface WordItemProps {
  word: { word: string; mean: string; id: number; status: boolean };
  wordRepository: any;
}

const WordItem: React.FC<WordItemProps> = ({ word, wordRepository }) => {
  const [isCompleted, setIsCompleted] = useState(word.status);
  const [isShownMean, setIsShownMean] = useState(false);

  const userId = useAppSelector((state) => state.userSlice.userId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(updateWordStatus({ id: word.id, status: isCompleted }));
  }, [dispatch, isCompleted, word.id]);

  // 업데이트 구현해야함
  const handleClickComplete = () => {
    setIsCompleted(isCompleted ? false : true);
    //dispatch(updateWordStatus({ id: word.id, status: isCompleted }));
  };

  const handleShowMean = () => {
    setIsShownMean(isShownMean ? false : true);
  };

  const handleDelete = () => {
    dispatch(removeWord({ userId, word }));
    dispatch(
      showSnackbar({
        message: `${word.word} 이(가) 삭제되었습니다.`,
        color: 'red',
      })
    );
  };

  return (
    <Li>
      <WordContainer>
        <p className='word'>{word.word}</p>
        <p
          className={isShownMean ? 'mean' : 'mean hidden'}
          onClick={handleShowMean}
        >
          {word.mean}
        </p>
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
            handleDelete();
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
  flex-direction: column;
  justify-content: space-between;
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
    width: fit-content;
    transition: all 0.1s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &.hidden {
      background-color: #ddd;
      color: #ddd;
      -webkit-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
`;

const WordContainer = styled.div`
  //align-self: center;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
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
