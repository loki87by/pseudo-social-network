import { Dispatch, SetStateAction } from "react";

export interface StringsObject {
  [key: string]: string;
}

export interface Message {
  [key: string]: string|number;
}

export interface UserPlaces {
  [key: string]: string | StringsObject;
}

export interface UserData {
  [key: string]: string | UserPlaces | number | [Message];
}

export interface MainProps {
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
