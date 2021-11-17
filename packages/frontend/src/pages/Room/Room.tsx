import React, { useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useBeforeunload } from 'react-beforeunload';
import {
  Button,
  Grid,
  Box,
} from '@material-ui/core';
import {
  RoomContainer,
  LoadingOverlay,
  LoadingIcon,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import { ASSIGN_MARK, CLIENT_GAME_START, JOIN_ROOM, UPDATE_PLAYERS } from '../../config/socketActions';
import { LOADING } from '../../config/status';
import { ROOMLIST_PATH } from '../../config/paths';
import type { Player, Profile } from '../../types/user';
import Chat from '../../components/Chat';
import Board from '../../components/Board';
import PlayerCard from '../../components/PlayerCard';

const Room = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const params = useParams() as any;
  const user = useAppSelector(selectUserState);
  const [players, setPlayers] = useState<any>([null, null]);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [mark, setMark] = useState({
    circle: false,
    ex: false,
  });

  // Stop user from reloading/ close then open the page again
  useBeforeunload(() => {
    history.replace(ROOMLIST_PATH);
  });

  useEffect(() => {
    setSocket(io(process.env.REACT_APP_WS_BASE_URL!));
    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (user.id && socket) {
      socket.emit(JOIN_ROOM, {
        user,
        room: {
          id: params.id,
        },
      });
    }
  }, [socket, user]);

  useEffect(() => {
    socket?.on(UPDATE_PLAYERS, (updatedPlayers: Profile[]) => {
      setPlayers(updatedPlayers);
    });

    socket?.on(ASSIGN_MARK, (assignedMark: any) => {
      setMark(assignedMark);
    });
  }, [socket]);

  // TODO: useCallback can be applied here
  const startGame = () => {
    socket?.emit(CLIENT_GAME_START, {
      room: {
        id: params.id,
      },
    });
  };

  const currentPlayerIndex = useMemo(() => {
    return players.findIndex((player: any) => player?.id === user.id);
  }, [players, user]);

  return (
    <RoomContainer>
      {/* <LoadingOverlay open={user.status === LOADING || room.status === LOADING}>
        <LoadingIcon />
      </LoadingOverlay> */}
      <Grid container>
        <Grid item xs={3}>
          <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" height="100%">
            <PlayerCard
              player={players[0]}
              currentPlayer={currentPlayerIndex === 0 ? players[0] : null}
              opponent={currentPlayerIndex === 0 ? null : players[0]}
            />
            <PlayerCard
              player={players[1]}
              currentPlayer={currentPlayerIndex === 1 ? players[1] : null}
              opponent={currentPlayerIndex === 1 ? null : players[1]}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Board
            socket={socket}
            mark={mark}
            player={players.filter((p: any) => p?.id === user.id)}
          />
        </Grid>
        <Grid item xs={3}>
          <Chat
            socket={socket!}
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" css={{ width: '100%' }} mt={2}>
        <Button type="button" variant="contained" color="primary" onClick={() => startGame()}>GAME START</Button>
      </Box>
    </RoomContainer>
  );
};

export default React.memo(Room);
