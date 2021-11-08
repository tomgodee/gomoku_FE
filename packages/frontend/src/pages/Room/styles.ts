import styled from 'styled-components';
import {
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { rose } from '../../themes/colors';

export const RoomContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const LoadingOverlay = styled(Backdrop)`
  z-index: 1;
`;

export const LoadingIcon = styled(CircularProgress)`
  color: ${rose};
` as typeof CircularProgress;
