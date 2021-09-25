import { ITodo, StateRoot } from "@/types/ITodo";

const AllTodos: ITodo[] = [];
const loading = false;

const initialState: StateRoot = {
  AllTodos,
  loading,
};

export default initialState;
