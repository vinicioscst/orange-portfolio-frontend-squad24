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

export interface LoadUserResponse {
  user: IUser;
  projects: IProject[];
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  image?: string;
  isgoogleaccount?: boolean;
}

export interface IProject {
  id: number;
  title: string;
  tags: string;
  link: string;
  description: string;
  image: string;
  createddate: string;
}

export interface IGoogleLoginData {
  fullName: string;
  email: string;
  password: string;
  image?: string | undefined;
  isGoogleAccount?: boolean | undefined;
}

export interface ICreateUserBody {
  fullName: string;
  email: string;
  password: string;
  image?: string;
  isGoogleAccount?: boolean;
}

export interface IImageUploadResponse {
  ETag: string;
  VersionId: string;
  Location: string;
  key: string;
  Key: string;
  Bucket: string;
}

export interface IUserContext {
  handleUser: (formData: RegisterFormData) => Promise<void>;
  loginUser: (formData: LoginFormData) => Promise<void>;
  googleLogin: (formData: IGoogleLoginData) => Promise<void>;
  userLogout(): void;
  user: LoadUserResponse | null | undefined;
  loading: boolean;
}
