interface Player {
  socketId: string;
  id: number;
  name: string;
  score: number;
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
