import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AuthService from './../../service/authService';

const authService = new AuthService();

const Header = () => {
  const navigate = useNavigate();
  const locationState = useLocation().state;

  const [userId, setUserId] = useState(locationState && locationState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        navigate('/');
      }
    });
  }, [userId, navigate]);

  return (
    <HeaderDiv>
      <Link to={'/'}>
        <Logo>단어장</Logo>
      </Link>
      {userId && <button onClick={onLogout}>Logout</button>}
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
