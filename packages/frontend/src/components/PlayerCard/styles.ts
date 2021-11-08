import styled from 'styled-components';
import {
  Typography,
} from '@material-ui/core';
import { borderChatContainer, prussianBlue } from '../../themes/colors';

export const PlayerCardContainer = styled.div`
  display: flex;
  width: 85%;
  border: 4px solid ${borderChatContainer};
  border-radius: 10px;
`;

export const Text = styled(Typography)`
  color: ${prussianBlue};
` as typeof Typography;

export const NameTag = styled(Typography)`
  color: ${prussianBlue};
  text-transform: uppercase;
` as typeof Typography;

export const Score = styled(Typography)`
  color: ${prussianBlue};
  font-size: 132px;
` as typeof Typography;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
`;
