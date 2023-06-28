export interface User {
  id: number;
  name: string;
  email: string;
  remember_me_token: null;
  created_at: string;
  updated_at: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  user: User;
  token: string;
}
