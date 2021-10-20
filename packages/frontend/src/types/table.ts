import { SUITES } from '../config/constants';

interface Pot {
  id: number;
  amount: number;
  limit: number;
  bestHandStrength: number;
  winners: string[];
  excludedPlayers: string[];
  sidePot: boolean;
}

interface Card {
  number: number;
  suite: typeof SUITES.HEARTS | typeof SUITES.DIAMONDS | typeof SUITES.CLUBS | typeof SUITES.SPADES;
}

export type {
  Pot,
  Card,
};
