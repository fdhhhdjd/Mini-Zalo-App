//* IMPORT
import { TYPES } from "redux/placeholder/PlaceholderTypes";

export type responseData = {
  data: placeHolderItem;
};

export interface placeHolderItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface initialInterface {
  loading: boolean;
  todos: placeHolderItem[];
  error: Error | null;
}

export type TodoAction<T> = {
  type:
    | typeof TYPES.GET_PLACEHOLDER_PENDING
    | typeof TYPES.GET_PLACEHOLDER_SUCCESS
    | typeof TYPES.GET_PLACEHOLDER_ERROR;
  payload?: T;
};

export type placeHolderData = placeHolderItem;
