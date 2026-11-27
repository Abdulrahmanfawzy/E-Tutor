export interface LoginCredentials {
  login: string;
  password: string;
}

export interface AuthUser {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  username: string;
  email: string;
  avatar_url: string | null;
  roles: string[];
  is_instructor: boolean;
  is_admin: boolean;
  email_verified: boolean;
  status: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
    token: string;
    token_type: string;
  };
}
