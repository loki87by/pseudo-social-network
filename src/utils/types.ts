export interface StringsObject {
  [key: string]: string;
}

export interface UserPlaces {
  [key: string]: string | StringsObject;
}

export interface UserData {
  [key: string]: string | UserPlaces | number;
}
