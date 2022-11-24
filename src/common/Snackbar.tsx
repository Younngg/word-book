import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Snackbar = () => {
  return (
    <Container>
      <p>메시지입니다.</p>
      <LodingBox>
        <CloseButton>
          <FontAwesomeIcon icon={faXmark} size='lg' />
        </CloseButton>
        <LodingSpinner>
          <circle r='13' cx='15' cy='15'></circle>
        </LodingSpinner>
      </LodingBox>
    </Container>
  );
};

export default Snackbar;

const Container = styled.div`
  padding: 0.8em 2em;
  background-color: #00cecbbc;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  position: fixed;
  right: 20px;
  top: 110px;
`;

const LodingBox = styled.div`
  display: inline-block;
  position: relative;
  height: 30px;
  width: 30px;
  text-align: center;
  cursor: pointer;
  margin-left: 20px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  display: inline-block;
  width: 30px;
  height: 30px;
`;

const LodingSpinner = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  transform: rotateY(-180deg) rotateZ(-90deg);
  circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 3px;
    stroke: white;
    fill: none;
    animation: countdown 5s linear infinite forwards;
  }
  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
  }
`;
