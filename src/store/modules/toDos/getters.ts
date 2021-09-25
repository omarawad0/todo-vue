import { GETTERS } from "@/types/ETodo";
import { StateRoot } from "@/types/ITodo";
import { GetterTree } from "vuex";
import { Getters } from "../types.";
const getters: GetterTree<StateRoot, StateRoot> & Getters = {
  [GETTERS.ALL_TO_DOS]: (state) => state.AllTodos,
  [GETTERS.LOADING]: (state) => state.loading,
};

export default getters;
