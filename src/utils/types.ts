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

export interface ProptectedRouteProps {
  component: React.FC;
  exact: boolean;
  dataLoaded: boolean;
  dataLoading: boolean;
  path: string;
}/* 

export interface UserProps {
  dataLoaded: boolean;
  loadData: VoidFunction;
  // setContextMenuOpened: Dispatch<SetStateAction<boolean>>;
} */
