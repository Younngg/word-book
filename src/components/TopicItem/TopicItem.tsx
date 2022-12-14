import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { removeTopic } from '../../store/topics';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showSnackbar } from '../../store/snackbar';

interface TopicItemProps {
  topic: any;
}

const TopicItem: React.FC<TopicItemProps> = ({ topic }) => {
  const { topic: name, id, words } = topic;

  const [memorizedCount, setMemorizedCount] = useState(0);

  const userId = useAppSelector((state) => state.userSlice.userId);

  const dispatch = useAppDispatch();

  // 이 부분 고쳐야 함
  // 단어 개수 확인 안 됨
  // topic detail 들어갔다 나와야 뜸
  useEffect(() => {
    const memorizedWords = Object.keys(words).filter(
      (key) => words[key].status === true && words[key].topicId === id
    );
    setMemorizedCount(memorizedWords.length);
  }, [words, id]);

  const message = `전체 ${
    Object.keys(words).length
  } 개 중 ${memorizedCount}개 암기 완료`;

  const handleDelete = (topicId: number) => {
    dispatch(removeTopic({ userId, topicId }));
    dispatch(
      showSnackbar({
        message: `${name} 이(가) 삭제되었습니다.`,
        isShowing: true,
        color: 'red',
      })
    );
  };

  return (
    <Li>
      <Link to={`/topics/${id}`} state={{ name, id }}>
        <TopicTitle>{name}</TopicTitle>
      </Link>
      <div>
        <span>{message}</span>
        <DeleteButton onClick={() => handleDelete(id)}>DEL</DeleteButton>
      </div>
    </Li>
  );
};

export default TopicItem;

const Li = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

const TopicTitle = styled.div`
  font-size: 20px;
  &:hover {
    color: #00b894;
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 2rem;
  margin-left: 2rem;
  color: #333;
  background-color: #f1f1f1;
  &:hover {
    background-color: #e9e9e9;
  }
`;
