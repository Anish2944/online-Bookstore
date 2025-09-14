export interface User {
    id?: number;
    name: string;
    email: string;
    role: string;
  }
  
  export interface AuthResponse {
    token: string;
    email: string;
    name: string;
    role: string;
  }
  