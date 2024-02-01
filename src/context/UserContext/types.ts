import { LoginFormData, RegisterFormData } from "../../schemas/userSchemas";

export interface IUserProvider {
  children: React.ReactNode | React.ReactElement;
}

export interface UserResponse {
  usuario: {
    id: number;
    fullname: string;
    email: string;
    image?: string;
    isgoogleaccount?: boolean;
  };
  token: string;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  image?: string;
  isgoogleaccount?: boolean;
}

export interface IGoogleLoginData {
  fullName: string;
  email: string;
  password: string;
  image?: string | undefined;
  isGoogleAccount?: boolean | undefined;
}

export interface IUserContext {
  createUser: (formData: RegisterFormData) => Promise<void>;
  loginUser: (formData: LoginFormData) => Promise<void>;
  googleLogin: (formData: IGoogleLoginData) => Promise<void>;
  userLogout(): void;
  user: IUser | null | undefined;
  loading: boolean;
}
