import { createContext, useState } from "react";
import { IUser, IUserContext, IUserProvider } from "./types";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "../ToastContext";
import { LoginFormData, RegisterFormData } from "../../schemas/userSchemas";
import { api } from "../../services/api";
import Cookies from "js-cookie"

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProvider) {
  const { reset } = useForm();
  const navigate = useNavigate();
  const { displayToast } = useToast();
  const [user, setUser] = useState<IUser | null>();

  async function createUser(formData: RegisterFormData) {
    const { name, surname, email, password } = formData;
    const data = {
      fullName: `${name} ${surname}`,
      email,
      password,
    };

    displayToast({
      message: "",
      severity: "info",
      title: "Carregando",
      variant: "filled",
      isLoading: true,
    });

    try {
      await api.post("/user", data);
      
      displayToast({
        message: "",
        severity: "success",
        title: "Usuário cadastrado com sucesso",
        variant: "filled",
        isLoading: false,
      });
      
      reset();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: any) {
      const err = error.response.data.mensagem;

      displayToast({
        message: "",
        severity: "error",
        title: `${err}`,
        variant: "filled",
        isLoading: false,
      });
    }
  }

  async function loginUser(formData: LoginFormData) {
    displayToast({
      message: "",
      severity: "info",
      title: "Carregando",
      variant: "filled",
      isLoading: true,
    });

    try {
      const { data } = await api.post<IUser>("/session", formData);
      setUser(data)
      
      Cookies.set('auth_token', data.token, { expires: 7 })

      displayToast({
        message: "",
        severity: "success",
        title: "Login realizado com sucesso",
        variant: "filled",
        isLoading: false,
      });
      
      reset();
      setTimeout(() => {
        navigate("/my-projects");
      }, 2000);

    } catch (error: any) {
      const err = error.response.data.mensagem;

      displayToast({
        message: "",
        severity: "error",
        title: `${err}`,
        variant: "filled",
        isLoading: false,
      });
    }
  }

  return (
    <UserContext.Provider value={{ createUser, loginUser, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
