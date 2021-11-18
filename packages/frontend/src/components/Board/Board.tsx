/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-prop-types */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Typography } from '@material-ui/core';
import {
  BoardContainer,
  BoardSquare,
  Line,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import { LOADING } from '../../config/status';
import {
  CLIENT_CHECK, SERVER_CHECK, SERVER_GAME_START,
  GAME_OVER,
} from '../../config/socketActions';
import { rose, arapawa } from '../../themes/colors';

interface BoardProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
  mark: {
    circle: boolean;
    ex: boolean;
  };
  player: any;
}

interface Square {
  id: string;
  circle: boolean;
  ex: boolean;
  drawing?: boolean;
}

const Board = (props: BoardProps) => {
  const createBoard = useCallback(() => {
    const initialState = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        initialState.push({
          id: `${i}-${j}`,
          circle: false,
          ex: false,
          drawing: false,
        });
      }
    }
    return initialState;
  }, []);

  const history = useHistory();
  const dispatch = useAppDispatch();
  const params = useParams() as any;
  const user = useAppSelector(selectUserState);
  const [myTurn, setMyTurn] = useState(false);
  const [board, setBoard] = useState<Square[]>(createBoard());
  const [direction, setDirection] = useState('');
  const squareRef = useRef<any>();

  const [playable, setPlayable] = useState(false);

  useEffect(() => {
    props.socket?.on(SERVER_GAME_START, (boardGame: Square[]) => {
      setBoard(boardGame);
      setPlayable(true);
    });

    props.socket?.on(GAME_OVER, (winningCondition: {circle: boolean; ex: boolean; drawingLine: string[], direction: string}) => {
      if (!winningCondition) {
        setBoard(createBoard());
      } else {
        setDirection(winningCondition.direction);
        setBoard((prevState) => {
          for (let i = 0; i < winningCondition.drawingLine.length; i += 1) {
            const [y, x] = winningCondition.drawingLine[i].split('-');
            const index = Number(`${x}${y}`);
            prevState[index].drawing = true;
          }
          return prevState;
        });
      }
      setPlayable(false);
      setMyTurn(false);
    });

    props.socket?.on(SERVER_CHECK, (square: Square) => {
      setBoard((prevState) => {
        return prevState.map((boardSquare) => {
          if (boardSquare.id === square.id) return square;
          return boardSquare;
        });
      });
      setMyTurn((prevState: boolean) => !prevState);
    });
  }, [props.socket]);

  useEffect(() => {
    if (props.mark.ex) setMyTurn(true);
  }, [props.mark]);

  const handleClickSquare = (square: Square) => {
    const index = Number(square.id.split('-').join(''));
    if (playable && myTurn && !board[index].circle && !board[index].ex) {
      props.socket?.emit(CLIENT_CHECK, {
        square: Object.assign(square, props.mark),
        board,
        room: {
          id: params.id,
        },
      });
    }
  };

  const lineWidth = useMemo(() => {
    return Math.sqrt((squareRef.current?.clientWidth + 2) ** 2 + (squareRef.current?.clientHeight + 2) ** 2);
  }, [squareRef.current?.clientWidth, squareRef.current?.clientHeight]);

  const rotate = useMemo(() => {
    return Math.atan((squareRef.current?.clientWidth + 2) / (squareRef.current?.clientHeight + 2)) * 180 / Math.PI;
  }, [squareRef.current?.clientWidth, squareRef.current?.clientHeight]);

  return (
    <BoardContainer>
      {board.map((square, index) => {
        return (
          <BoardSquare
            key={square.id}
            onClick={() => handleClickSquare(square)}
            ref={index === 0 ? squareRef : null}
          >
            <Typography style={{ fontSize: 24, color: square.circle ? rose : arapawa }}>
              {square.circle && 'O'}
              {square.ex && 'X'}
            </Typography>
            {square.drawing && <Line $width={lineWidth} $rotate={rotate} />}
          </BoardSquare>
        );
      })}
    </BoardContainer>
  );
};

export default React.memo(Board);
