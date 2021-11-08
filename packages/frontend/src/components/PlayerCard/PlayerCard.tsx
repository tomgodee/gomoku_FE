import React from 'react';
import {
  Box,
  Grid,
} from '@material-ui/core';
import {
  PlayerCardContainer,
  Text,
  Avatar,
  NameTag,
  Score,
} from './styles';
import type { Player } from '../../types/user';
import { goStone } from '../../assets';
import { borderChatContainer } from '../../themes/colors';

type PlayerCardProps = {
  player?: Player;
}

const PlayerCard = (props: PlayerCardProps) => {
  const { player } = props;

  return (
    <PlayerCardContainer>
      <Grid container>
        <Grid item xs={8} style={{ borderRight: `4px solid ${borderChatContainer}` }}>
          <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" height="100%">
            <Avatar src={goStone} alt="Avatar" />
            <NameTag>
              Tom
            </NameTag>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Score>
              0
            </Score>
          </Box>
        </Grid>
      </Grid>
    </PlayerCardContainer>
  );
};

PlayerCard.defaultProps = {
  player: {
    socketId: '',
    user: {
      seat: 0,
      name: '',
      money: 0,
    },
  },
};

export default React.memo(PlayerCard);
