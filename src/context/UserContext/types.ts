import { RegisterFormData } from "../../schemas/userSchemas";

export interface IUserProvider {
  children: React.ReactNode | React.ReactElement;
}

export interface IUserContext {
  createUser: (formData: RegisterFormData) => Promise<void>;
}
