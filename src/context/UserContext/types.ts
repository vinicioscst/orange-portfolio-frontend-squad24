import { LoginFormData, RegisterFormData } from "../../schemas/userSchemas";

export interface IUserProvider {
  children: React.ReactNode | React.ReactElement;
}

export interface IUser {
  usuario: {
    id: number;
    fullName: string;
    email: string;
  };
  token: string;
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
