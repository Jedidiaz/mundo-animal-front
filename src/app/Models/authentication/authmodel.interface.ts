export interface RegisterI {
  email: string;
  password: string;
  role: string;
}

export interface LoginI {
  email:string;
  password: string;
}

export interface AuthI {
  payload: string;
  extendsI: string;
}


