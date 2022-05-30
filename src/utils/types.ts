import { Dispatch, SetStateAction } from "react";

export interface StringsObject {
  [key: string]: string;
}

export interface Message {
  [key: string]: string | number;
}

export interface Comment {
  postId: number;
  name: string;
  email: string;
  body: string;
  id: number;
}

export interface UserPlaces {
  [key: string]: string | StringsObject;
}

export interface UserData {
  [key: string]: string | UserPlaces | number | [Message];
}

export interface InputProps {
  data: string;
  type: string;
  name: string;
  text: string;
  setData: Dispatch<SetStateAction<string>>;
  textArea?: boolean;
}

export interface PostProps {
  setPopupOpened: Dispatch<SetStateAction<boolean>>;
  setPostId: Dispatch<SetStateAction<number>>;
}

export interface MainProps extends PostProps {
  setUsersPage: Dispatch<SetStateAction<boolean>>;
}

export interface ProptectedRouteProps extends MainProps {
  component: React.FC<MainProps>;
  exact: boolean;
  dataLoaded: boolean;
  dataLoading: boolean;
  path: string;
}

export interface UsersProps {
  setUsersPage: Dispatch<SetStateAction<boolean>>;
}

export interface HeaderProps {
  isUsersPage: boolean;
}
