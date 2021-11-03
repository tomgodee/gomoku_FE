/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  Input,
  Typography,
} from '@material-ui/core';
import { gray, salmon, borderChatContainer } from '../../themes/colors';

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
`;
