import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useBeforeunload } from 'react-beforeunload';
import {
  Grid,
} from '@material-ui/core';
import {
  RoomContainer,
  LoadingOverlay,
  LoadingIcon,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import { ASSIGN_MARK } from '../../config/socketActions';
import { LOADING } from '../../config/status';
import { ROOMLIST_PATH } from '../../config/paths';
import { BuyIn as BuyInInterface } from '../../types/room';
import Chat from '../../components/Chat';
import Board from '../../components/Board';

const Room = () => {
  const history = useHistory();
  const location = useLocation<BuyInInterface>();
  const dispatch = useAppDispatch();
  const params = useParams() as any;
  const user = useAppSelector(selectUserState);
  const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [mark, setMark] = useState({
    circle: false,
    ex: false,
  });

  // Stop user from reloading/ close then open the page again
  useBeforeunload(() => {
    history.replace(ROOMLIST_PATH);
  });

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_WS_BASE_URL!);
    socket.current.on(ASSIGN_MARK, (assignedMark: any) => {
      setMark(assignedMark);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  return (
    <RoomContainer>
      {/* <LoadingOverlay open={user.status === LOADING || room.status === LOADING}>
        <LoadingIcon />
      </LoadingOverlay> */}
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Board
            socket={socket.current!}
            mark={mark}
          />
        </Grid>
        <Grid item xs={3}>
          <Chat
            socket={socket.current!}
          />
        </Grid>
      </Grid>
    </RoomContainer>
  );
};

export default React.memo(Room);
