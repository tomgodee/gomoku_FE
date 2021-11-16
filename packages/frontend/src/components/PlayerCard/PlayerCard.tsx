/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';
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
  currentPlayer: any;
  opponent: any;
}

const PlayerCard = (props: PlayerCardProps) => {
  const { player, currentPlayer, opponent } = props;
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevState) => prevState += 1);
    }, 1000);
    setTimer(0);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPlayer?.myTurn, opponent?.myTurn]);

  const showClock = useCallback((time: number): string => {
    let minute = '';
    let second = '';
    if (time < 60) {
      minute = '00';
    } else if (time < 600) {
      minute = `0${Math.floor(time / 60)}`;
    } else {
      minute = `${Math.floor(time / 60)}`;
    }

    if (Math.floor(time % 60) < 10) {
      second = `0${Math.floor(time % 60)}`;
    } else {
      second = `${Math.floor(time % 60)}`;
    }

    return `${minute}:${second}`;
  }, []);

  return (
    <PlayerCardContainer>
      <Grid container>
        <Grid item xs={8} style={{ borderRight: `4px solid ${borderChatContainer}` }}>
          <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" height="100%">
            <Avatar src={goStone} alt="Avatar" />
            <NameTag>
              {player?.name}
            </NameTag>
            {currentPlayer?.myTurn
              && (
              <Text>
                {showClock(timer)}
              </Text>
              )}
            {opponent?.myTurn
              && (
              <Text>
                {showClock(timer)}
              </Text>
              )}
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Score>
              {player?.score}
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
    name: '',
    id: 0,
    score: 0,
  },
};

export default React.memo(PlayerCard);
