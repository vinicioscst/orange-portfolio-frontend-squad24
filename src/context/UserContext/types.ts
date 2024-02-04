import { projectFormData } from "../../schemas/projectsSchemas";
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

export interface AllProjectsResponse {
  id: number;
  title: string;
  tags: string;
  link?: string;
  description?: string;
  image?: string;
  createddate: string;
  userid: number;
  user: IUserWithoutId;
}

export interface IUserWithoutId {
  fullname: string;
  email: string;
  profileImage?: string;
  isGoogleAccount: boolean | null;
}

export interface LoadUserResponse {
  userid: number;
  fullname: string;
  email: string;
  profileimage: string | null;
  isgoogleaccount?: boolean | null;
  projects: IProject[] | [];
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
  link?: string | null;
  description?: string | null;
  image: string | null;
  createddate: string;
  userid?: number | null | undefined;
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
export interface IModalData {
  title: string;
  open: boolean;
}

export interface IOpenedProjectData {
  project: AllProjectsResponse | null;
  open: boolean;
}

export interface IUserContext {
  handleUser: (formData: RegisterFormData) => Promise<void>;
  loginUser: (formData: LoginFormData) => Promise<void>;
  googleLogin: (formData: IGoogleLoginData) => Promise<void>;
  userLogout(): void;
  user: LoadUserResponse | null | undefined;
  loading: boolean;
  handleProject: (formBody: projectFormData) => Promise<void>;
  setIsAddProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddProjectModalOpen: boolean;
  getProjects: () => Promise<void>;
  allProjects: AllProjectsResponse[];
  handleDeleteProject: () => void;
  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProjectId: React.Dispatch<React.SetStateAction<number>>;
  selectedProjectId: number;
  setModalData: React.Dispatch<
    React.SetStateAction<IModalData | null | undefined>
  >;
  modalData: IModalData | null | undefined;
  setOpenedProjectData: React.Dispatch<React.SetStateAction<IOpenedProjectData | null | undefined>>;
  openedProjectData: IOpenedProjectData | null | undefined;
  handleDetailProject(id: number): Promise<void>;
}
