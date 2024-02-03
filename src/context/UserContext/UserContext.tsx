import {
  ICreateUserBody,
  IGoogleLoginData,
  IImageUploadResponse,
  IUserContext,
  IUserProvider,
  LoadUserResponse,
  UserResponse,
} from "./types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "../ToastContext";
import { LoginFormData, RegisterFormData } from "../../schemas/userSchemas";
import { api } from "../../services/api";
import Cookies from "js-cookie";
import { projectFormData, registerProject } from "../../schemas/projectsSchemas";

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProvider) {
  const { reset } = useForm();
  const navigate = useNavigate();
  const { displayToast } = useToast();
  const [user, setUser] = useState<LoadUserResponse | null>();
  const [loading, setLoading] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false)

  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = Cookies.get("auth_token");
    
    if (token) {
      loadUser(token);
    }
  }, []);

  async function loadUser(token: string | undefined) {
    if (token === undefined) return 
    try {
      setLoading(true);
      const { data } = await api.get<LoadUserResponse>("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);
      navigate(currentPath);
      return data
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  async function createUser(body: ICreateUserBody) {
    displayToast({
      message: "",
      severity: "info",
      title: "Carregando",
      variant: "filled",
      isLoading: true,
    });

    try {
      await api.post("/user", body);

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

  async function handleUser(formBody: RegisterFormData) {
    if (formBody.image.lenght !== 0) {
      const formData = new FormData();
      formData.append("file", formBody.image[0]);

      const { data } = await api.post<IImageUploadResponse>("/projects/upload", formData);

      const { name, surname, email, password } = formBody;
      const body = {
        fullName: `${name} ${surname}`,
        email,
        password,
        image: data.Location
      };

      return await createUser(body);
    } else {
      const { name, surname, email, password } = formBody;
      const body = {
        fullName: `${name} ${surname}`,
        email,
        password,
      };

      return await createUser(body);
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
      const { data } = await api.post<UserResponse>("/session", formData);

      Cookies.set("auth_token", data.token, { expires: 7 });
      const token = Cookies.get("auth_token");
      const user: LoadUserResponse | undefined = await loadUser(token!)

      setUser(user);

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
      const { data } = await api.post<UserResponse>(
        "/session/google",
        formData
      );

      Cookies.set("auth_token", data.token, { expires: 7 });
      const token = Cookies.get("auth_token");
      const user: LoadUserResponse | undefined = await loadUser(token!)

      setUser(user);

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

      Cookies.remove("auth_token");
      setUser(null);

      navigate("/");
    }, 1000);
  }

  async function createProject(body: registerProject) {
    const token = Cookies.get("auth_token");

    displayToast({
      message: "",
      severity: "info",
      title: "Carregando",
      variant: "filled",
      isLoading: true,
    });

    try {
      await api.post("/projects", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      displayToast({
        message: "",
        severity: "success",
        title: "Projeto cadastrado com sucesso",
        variant: "filled",
        isLoading: false,
      });
      
      loadUser(token)
      reset();
      setIsAddProjectModalOpen(false)

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

  async function handleProject(formBody: projectFormData) {
    if (formBody.image !== null || formBody.image !== undefined) {
      const formData = new FormData();
      formData.append("file", formBody.image);

      const { data } = await api.post<IImageUploadResponse>("/projects/upload", formData);

      const { title,  tags, description, link } = formBody;
      const body = {
        title,
        tags: tags.join(", "),
        description,
        image: data.Location,
        link,
        createddate: `${new Date()}`
      };

      return await createProject(body);
    } else {
      const { title,  tags, description, image, link } = formBody;
      const body = {
        title,
        tags: tags.join(", "),
        description,
        image,
        link,
        createddate: `${new Date()}`
      };

      return await createProject(body);
    }
  }

  return (
    <UserContext.Provider
      value={{ handleUser, loginUser, googleLogin, userLogout, user, loading, handleProject, isAddProjectModalOpen, setIsAddProjectModalOpen }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
