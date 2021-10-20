import styled from 'styled-components';
import {
  Container, Grid, Button,
  Card, CardContent, CardMedia,
  TextField, Backdrop, CircularProgress,
} from '@material-ui/core';
import { prussianBlue, rose } from '../../themes/colors';

interface LoginItemGridProps {
  $flex?: boolean;
  $directionColumn?: boolean;
}

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const LoginContainerGrid = styled(Grid)`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
  height: 585px;
  border: 2px solid ${prussianBlue};
  border-radius: 5px;
`;

export const LoginItemGrid = styled(Grid)<LoginItemGridProps>`
  // @media (max-width: 960px) {
  //   display: none;
  // }
`;

export const LoginForm = styled.form<LoginItemGridProps>`
  display: ${(props) => (props.$flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.$directionColumn ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoginButton = styled(Button)`
  align-self: center;
`;

export const LoginCardContent = styled(CardContent)``;

export const LoginTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

export const LoadingOverlay = styled(Backdrop)`
  z-index: 1;
`;

export const LoadingIcon = styled(CircularProgress)`
  color: ${rose};
` as typeof CircularProgress;
