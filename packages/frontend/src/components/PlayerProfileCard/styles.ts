import styled from 'styled-components';
import {
  Button, Typography,
} from '@material-ui/core';
import { white, gray, black, mintCream, charcoal, balihai, bunting } from '../../themes/colors';

interface PlayerCardContainerProps {
  active: boolean;
}

export const PlayerCardContainer = styled.div<PlayerCardContainerProps>`
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  display: flex;
  width: 180px;
  height: 70px;
  border: 4px solid ${gray};
  border-radius: 10px;
  background: ${black};
  background: linear-gradient(to right,${charcoal},${black});
  opacity: 0.8;
  z-index: 1;
`;

export const PlayerAvatar = styled.div`
  width: 41.66%;
  border: 4px solid ${gray};
  border-left: none;
  border-top: none;
  border-bottom: none;
  color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerInfo = styled.div`
  flex: 1 0 58.33%;
  color: ${mintCream};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Money = styled(Typography)`
  color: springgreen;
` as typeof Typography;

export const SplitLine = styled.hr`
  background: ${bunting};
  background: -webkit-linear-gradient(to right,${balihai}, ${bunting});
  background: linear-gradient(to right, ${balihai}, ${bunting});
  width: 70%;
  margin: 3px auto;
`;
