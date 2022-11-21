import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderDiv>
      <Link to={'/'}>
        <Logo>단어장</Logo>
      </Link>
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
