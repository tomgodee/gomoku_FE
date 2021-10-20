export interface Room {
  id: number;
  max_number_of_player: number;
  random_seat: boolean;
  seat_selectable: boolean;
  type: string;
  user_id: number;
}

export interface Message {
  id: string;
  username: string;
  content: string;
  roomId: number;
}

export interface BuyIn {
  money: number;
}
