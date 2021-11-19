/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import {
  Input,
  Typography,
} from '@material-ui/core';
import { green, salmon, borderChatContainer } from '../../themes/colors';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 65px);
`;

export const BoardSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: relative;
`;

interface LineProps {
  $width: number;
  $rotate: number;
  $top: number;
  $left: number;
}

const Fadein = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

export const Line = styled.div<LineProps>`
  position: absolute;
  top: ${(props) => (`${props.$top}%`)};
  left: ${(props) => (`${props.$left}%`)};
  width: ${(props) => (`${props.$width}px`)};
  height: ${(props) => (`${props.$width}px`)};
  border-left: 3px solid ${salmon};
  transform: ${(props) => (`rotate(${props.$rotate}deg)`)};
  animation: ${Fadein} 1.5s linear;
`;
