import { createContext, useEffect, useState } from "react";
import { IGoogleLoginData, IUser, IUserContext, IUserProvider } from "./types";
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
  const [loading, setLoading] = useState(false);

  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = Cookies.get("auth_token")

    const loadUser = async () => {
      console.log(loading)
      try {
        setLoading(true);
        const { data } = await api.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(currentPath);
      } catch (error: any) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadUser();
    }
  }, []);

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

  async function googleLogin(formData: IGoogleLoginData) {
    displayToast({
      message: "",
      severity: "info",
      title: "Carregando",
      variant: "filled",
      isLoading: true,
    });
    
    try {
      const { data } = await api.post<IUser>("/session/google", formData);
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

  function userLogout() {
    setTimeout(() => {
    displayToast({
      message: "",
      severity: "success",
      title: "Logout realizado com sucesso",
      variant: "filled",
      isLoading: false,
    });

    Cookies.remove("auth_token")
    setUser(null);
    
      navigate("/");
    }, 1000);
  };

  return (
    <UserContext.Provider value={{ createUser, loginUser, googleLogin, userLogout, user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
