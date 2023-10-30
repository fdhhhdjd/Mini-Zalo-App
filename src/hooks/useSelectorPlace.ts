//* LIB
import { useSelector } from "react-redux";

//* IMPORT
import { RootState } from "redux/rootReducer";

const useStoreTodo = () => {
  const state = useSelector((state: RootState) => state.todos);

  return state;
};

export default useStoreTodo;
