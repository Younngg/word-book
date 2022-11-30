import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser, saveUser } from '../../store/user';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from './../../store/hooks';
import { onAuthChange } from './../../store/user';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(
      onAuthChange((user: any) => {
        if (!user) {
          navigate('/');
        } else {
          dispatch(saveUser(user.uid));
        }
      })
    );
  }, [dispatch, navigate]);

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <HeaderDiv>
      <Link to={'/'}>
        <Logo>단어장</Logo>
      </Link>
      {userId.userId && <button onClick={onLogout}>Logout</button>}
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  width: 100vw;
  padding: 1.5rem 0;
  background-color: #00b894;
  box-shadow: 0px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 5px 8px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 8px 1px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  width: fit-content;
  padding: 0 1em;
  margin: auto;
  color: white;
  &:hover {
    color: #ddd;
  }
`;
