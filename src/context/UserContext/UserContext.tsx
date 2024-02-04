import {
  AllProjectsResponse,
  ICreateUserBody,
  IGoogleLoginData,
  IImageUploadResponse,
  IModalData,
  IOpenedProjectData,
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
import {
  projectFormData,
  registerProject,
} from "../../schemas/projectsSchemas";

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProvider) {
  const { reset } = useForm();
  const navigate = useNavigate();
  const { displayToast } = useToast();
  const [user, setUser] = useState<LoadUserResponse | null>();
  const [allProjects, setAllProjects] = useState<AllProjectsResponse[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  const [modalData, setModalData] = useState<IModalData | null>()
  const [openedProjectData, setOpenedProjectData] = useState<IOpenedProjectData | null>()

  const currentPath = window.location.pathname;

  const handleDeleteProject = async () => {
    try {
      const token = Cookies.get("auth_token");
      await api.delete(`/projects/${selectedProjectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getProjects();
      loadUser(token);
      
      setIsConfirmationModalOpen(false);

      setModalData({
        title: "Projeto deletado com sucesso!",
        open: true,
      })
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
  };

  useEffect(() => {
    const token = Cookies.get("auth_token");

    if (token) {
      loadUser(token);
    }
  }, []);

  async function loadUser(token: string | undefined) {
    if (token === undefined) return;

    try {
      setLoading(true);
      const { data } = await api.get<LoadUserResponse>("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);
      navigate(currentPath);
      return data;
    } catch (error: any) {
      displayToast({
        message: "",
        severity: "error",
        title: "Não foi possível carregar os dados do usuário",
        variant: "filled",
        isLoading: false,
      });
    } finally {
      setLoading(false);
    }
  }

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
    if (formBody.image.length !== 0) {
      const formData = new FormData();
      formData.append("file", formBody.image[0]);

      const { data } = await api.post<IImageUploadResponse>(
        "/upload",
        formData
      );

      const { name, surname, email, password } = formBody;
      const body = {
        fullName: `${name} ${surname}`,
        email,
        password,
        image: data.Location,
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

      const user: LoadUserResponse | undefined = await loadUser(token!);

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
      const user: LoadUserResponse | undefined = await loadUser(token!);

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

    try {
      await api.post("/projects", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadUser(token);
      reset();
      setIsAddProjectModalOpen(false);

      setModalData({
        title: "Projeto adicionado com sucesso!",
        open: true,
      })
    } catch (error: any) {
      displayToast({
        message: "",
        severity: "error",
        title: "No momento não é possível criar um projeto",
        variant: "filled",
        isLoading: false,
      });
    }
  }

  async function handleProject(formBody: projectFormData) {
    if (formBody.image !== null && formBody.image !== undefined) {
      const formData = new FormData();
      formData.append("file", formBody.image);

      const { data } = await api.post<IImageUploadResponse>(
        "/upload",
        formData
      );

      const { title, tags, description, link } = formBody;
      const body = {
        title,
        tags: tags.join(", "),
        description,
        image: data.Location,
        link
      };

      return await createProject(body);
    } else {
      const { title, tags, description, image, link } = formBody;
      const body = {
        title,
        tags: tags.join(", "),
        description,
        image,
        link
      };

      return await createProject(body);
    }
  }

  async function getProjects() {
    const token = Cookies.get("auth_token");

    try {
      const { data } = await api.get("/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllProjects(data)
    } catch (error) {
      displayToast({
        message: "",
        severity: "error",
        title: "Não foi possível carregar os projetos",
        variant: "filled",
        isLoading: false,
      });
    }
  }

  async function handleDetailProject(id: number) {
    const selectedProject = allProjects.filter((project) => project.id === id)
    setOpenedProjectData({
      project: selectedProject[0],
      open: true
    })
  }

  return (
    <UserContext.Provider
      value={{
        handleUser,
        loginUser,
        googleLogin,
        userLogout,
        user,
        loading,
        handleProject,
        isAddProjectModalOpen,
        setIsAddProjectModalOpen,
        getProjects,
        allProjects,
        handleDeleteProject,
        isConfirmationModalOpen,
        setIsConfirmationModalOpen,
        selectedProjectId,
        setSelectedProjectId,
        modalData,
        setModalData,
        openedProjectData,
        setOpenedProjectData,
        handleDetailProject
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
