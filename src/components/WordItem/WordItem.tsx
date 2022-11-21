import React from 'react';

interface WordItemProps {
  word: { word: string; mean: string; id: number };
  handleDelete: (id: number) => void;
}

const WordItem: React.FC<WordItemProps> = ({ word, handleDelete }) => {
  return (
    <li>
      <p>{word.word}</p>
      <p>{word.mean}</p>
      <button
        onClick={() => {
          handleDelete(word.id);
        }}
      >
        DEL
      </button>
    </li>
  );
};

export default WordItem;
