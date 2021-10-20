import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';
import {
  Container,
  RoomContainer,
  RoomSkeleton,
} from './styles';
import { useAppSelector } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import { ROOM_PATH } from '../../config/paths';

const RoomList = () => {
  const history = useHistory();
  const [rooms] = useState<number[]>([1]);
  const [roomID, setRoomID] = useState<number>(0);

  const user = useAppSelector(selectUserState);

  const joinRoom = (data: any) => {
    history.push(`${ROOM_PATH}/${roomID}`, data);
  };

  const clickRoom = (id: number) => {
    setRoomID(id);
  };

  return (
    <Container>
      {rooms.length
        ? (
          rooms.map((room) => {
            return (
              <RoomContainer
                key={room}
                onClick={() => clickRoom(room)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={170}
                  />
                  <CardContent>
                    <Typography component="p">
                      Room no.
                      {room}
                    </Typography>
                    <Typography component="p">
                      0/2
                      {' '}
                      players
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </RoomContainer>
            );
          })
        )
        : [1].map((room: number) => {
          return (
            <RoomSkeleton
              key={room}
              variant="rect"
            />
          );
        }) }
    </Container>
  );
};

export default React.memo(RoomList);
