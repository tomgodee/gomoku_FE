import React from 'react';
import { isArray } from 'lodash';
import {
  Typography,
} from '@material-ui/core';
import { PLAYER_STATUS } from '../../config/constants';
import {
  PlayerCardContainer,
  PlayerAvatar,
  PlayerInfo,
  SplitLine,
  Money,
} from './styles';
import type { Player } from '../../types/user';

type PlayerCardProps = {
  player?: Player;
}

const PlayerProfileCard = (props: PlayerCardProps) => {
  const { player } = props;
  let role;
  if (isArray(player?.user.role)) {
    role = player?.user.role.reduce((prev: string, current: string) => `${prev} ${current}`, '');
  } else {
    role = player?.user.role;
  }

  let money = '';
  if (player?.socketId) {
    if (player.user.currentMoney === 0) {
      if (player.user.status === PLAYER_STATUS.SIT_OUT) {
        money = 'Sitting out';
      } else if (player.user.status === PLAYER_STATUS.ALL_IN) {
        money = 'All-in';
      }
    } else {
      money = String(player.user.currentMoney);
    }
  }

  return (
    <PlayerCardContainer
      active={player?.user.status !== PLAYER_STATUS.SIT_OUT}
    >
      <PlayerAvatar>
        <Typography
          component="p"
        >
          {role || 'Pokermon'}
        </Typography>
      </PlayerAvatar>
      <PlayerInfo>
        <Typography
          component="p"
        >
          {player?.user.name || ''}
        </Typography>
        <SplitLine />
        <Money
          component="p"
        >
          {money}
        </Money>
      </PlayerInfo>
    </PlayerCardContainer>
  );
};

PlayerProfileCard.defaultProps = {
  player: {
    socketId: '',
    user: {
      seat: 0,
      name: '',
      money: 0,
    },
  },
};

export default React.memo(PlayerProfileCard);
