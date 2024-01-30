import { createContext } from "react";
import { IUserContext, IUserProvider } from "./types";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "../ToastContext";
import { RegisterFormData } from "../../schemas/userSchemas";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProvider) {
  const { reset } = useForm();
  const navigate = useNavigate();
  const { displayToast } = useToast();

  async function createUser(formData: RegisterFormData) {
    const { name, surname, email, password } = formData;

    displayToast({
      message: "",
      severity: "info",
      title: "Carregando",
      variant: "filled",
      isLoading: true,
    });

    try {
      const data = {
        fullName: `${name} ${surname}`,
        email,
        password,
      };

      await api.post("/user", data);
      reset();
      displayToast({
        message: "",
        severity: "success",
        title: "Usuário cadastrado com sucesso",
        variant: "filled",
        isLoading: false,
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);
    } catch (error: any) {
      const err = error.response.data.mensagem
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
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
