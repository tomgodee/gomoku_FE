import styled from 'styled-components';
import {
  Container, Grid, Button,
  Card, CardContent, CardMedia,
  TextField,
} from '@material-ui/core';
import { green } from '../../themes/colors';

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
  border: 2px solid ${green};
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
export const LoginCard = styled(Card)`

`;
export const LoginCardContent = styled(CardContent)``;
export const LoginCardMedia = styled(CardMedia)`
  height: 581px;
`;

export const LoginTextField = styled(TextField)`
  margin-bottom: 1rem;
`;
