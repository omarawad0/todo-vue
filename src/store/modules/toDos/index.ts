import initialState from "./initialState";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { StoreOptions } from "vuex";
import { StateRoot } from "@/types/ITodo";

const ToDos: StoreOptions<StateRoot> = {
  state: initialState,
  actions,
  mutations,
  getters,
};

export default ToDos;
