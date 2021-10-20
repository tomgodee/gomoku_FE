interface Player {
  socketId: string;
  user: {
    seat: number;
    name: string;
    currentMoney: number;
    totalMoney: number;
    bet: number;
    hasActioned: boolean;
    actions: string[],
    isActing: boolean;
    cards: any[];
    role: string | string[];
    status: string;
  }
}

interface LoginForm {
  username: string;
  password: string;
}

interface Profile {
  id: number;
  name: string;
  role: string;
}

export type {
  Player,
  LoginForm,
  Profile,
};
