import React from 'react';
import styled from 'styled-components';

interface WordItemProps {
  word: { word: string; mean: string; id: number };
  handleDelete: (id: number) => void;
}

const WordItem: React.FC<WordItemProps> = ({ word, handleDelete }) => {
  return (
    <Li>
      <p>{word.word}</p>
      <p>{word.mean}</p>
      <button
        onClick={() => {
          handleDelete(word.id);
        }}
      >
        DEL
      </button>
    </Li>
  );
};

export default WordItem;

const Li = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  font-size: 20px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;
