/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Typography } from '@material-ui/core';
import {
  BoardContainer,
  BoardSquare,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import { LOADING } from '../../config/status';
import { ROOMLIST_PATH } from '../../config/paths';
import { BuyIn as BuyInInterface } from '../../types/room';
import { CLIENT_CHECK, SERVER_CHECK } from '../../config/socketActions';

interface BoardProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  mark: {
    circle: boolean;
    ex: boolean;
  };
}

interface Square {
  id: string;
  circle: boolean;
  ex: boolean;
}

const Board = (props: BoardProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const params = useParams() as any;
  const user = useAppSelector(selectUserState);

  const [size, setSize] = useState(() => {
    const result = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        result.push({
          id: `${i}-${j}`,
          circle: false,
          ex: false,
        });
      }
    }
    return result;
  });

  useEffect(() => {
    props.socket?.on(SERVER_CHECK, (square: Square) => {
      const result = size.map((boardSquare) => {
        if (boardSquare.id === square.id) {
          const mark = props.mark.circle ? 'circle' : 'ex';
          boardSquare[mark] = true;
        }
        return boardSquare;
      });
      setSize(result);
    });
  }, [props.socket]);

  const handleClickSquare = (square: Square) => {
    props.socket.emit(CLIENT_CHECK, square);
  };

  return (
    <BoardContainer>
      {size.map((square) => {
        return (
          <BoardSquare
            key={square.id}
            onClick={() => handleClickSquare(square)}
          >
            <Typography style={{ fontSize: 24 }}>
              {square.circle && 'O'}
              {square.ex && 'X'}
            </Typography>
          </BoardSquare>
        );
      })}
    </BoardContainer>
  );
};

export default React.memo(Board);
