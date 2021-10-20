import React, { useEffect, useRef } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useBeforeunload } from 'react-beforeunload';
import {
  FlexContainer,
  RoomContainer,
  LoadingOverlay,
  LoadingIcon,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import { JOIN_ROOM } from '../../config/socketio';
import { LOADING } from '../../config/status';
import { ROOMLIST_PATH } from '../../config/paths';
import { BuyIn as BuyInInterface } from '../../types/room';
import Chat from '../../components/Chat';

const Room = () => {
  const history = useHistory();
  const location = useLocation<BuyInInterface>();
  const dispatch = useAppDispatch();
  const params = useParams() as any;
  const user = useAppSelector(selectUserState);
  const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

  // Stop user from reloading/ close then open the page again
  useBeforeunload(() => {
    history.replace(ROOMLIST_PATH);
  });

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_WS_BASE_URL!);
    if (params.id) {
      // dispatch(getRoom(params.id));
    }
    return () => {
      socket.current?.disconnect();
    };
  }, []);

  return (
    <FlexContainer>
      {/* <LoadingOverlay open={user.status === LOADING || room.status === LOADING}>
        <LoadingIcon />
      </LoadingOverlay> */}
      <Chat
        socket={socket.current!}
      />
    </FlexContainer>
  );
};

export default React.memo(Room);
