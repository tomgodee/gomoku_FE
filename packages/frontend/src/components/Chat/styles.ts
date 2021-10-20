import styled from 'styled-components';
import {
  Input,
  Typography,
} from '@material-ui/core';
import { gray, salmon, borderChatContainer } from '../../themes/colors';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  border-radius: 20px;
  height: 500px;
  over-flow: hidden;
  margin-right:20px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 10px 40px rgb(22 20 19 / 40%);
  border: 10px solid ${borderChatContainer};
`;

export const MessageContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Message = styled(Typography)`
  padding: 6px;
  text-align: left;
  word-break: break-all;
  font-size: 0.88rem;
` as typeof Typography;

export const Username = styled.span`
  color: ${salmon};
`;

export const ChatInput = styled(Input)`
  width: 90%;
  align-self: center;
  margin-bottom: 24px;
  padding: 12px;
  border: 2px solid  ${gray};
  border-radius: 10px;
  font-size: 0.88rem;

  &:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
  
  &.MuiInput-underline:before {
    border-bottom: none;
  }

  &.MuiInput-underline:after {
    border-bottom: none;
  }
` as typeof Input;
