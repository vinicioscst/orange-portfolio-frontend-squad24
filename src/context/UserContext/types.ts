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

export interface IUserContext {
  createUser: (formData: RegisterFormData) => Promise<void>;
  loginUser: (formData: LoginFormData) => Promise<void>;
  user: IUser | null | undefined;
}
