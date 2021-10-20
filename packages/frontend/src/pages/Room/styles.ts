import styled from 'styled-components';
import {
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { rose } from '../../themes/colors';

export const FlexContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

export const LoadingOverlay = styled(Backdrop)`
  z-index: 1;
`;

export const LoadingIcon = styled(CircularProgress)`
  color: ${rose};
` as typeof CircularProgress;
