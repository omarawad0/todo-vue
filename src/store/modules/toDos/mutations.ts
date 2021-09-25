import { MUTATIONS } from "@/types/ETodo";
import { StateRoot } from "@/types/ITodo";
import { message } from "ant-design-vue";
import { MutationTree } from "vuex";
import { Mutations } from "../types.";

const mutations: MutationTree<StateRoot> & Mutations = {
  [MUTATIONS.ADD_TO_DOS](state, toDos) {
    state.AllTodos = toDos;
  },

  [MUTATIONS.REMOVE_TODO](state, id) {
    state.AllTodos = state.AllTodos.filter((todo) => todo.id !== id);
  },

  [MUTATIONS.ADD_TO_DO](state, newTodo) {
    state.AllTodos.unshift(newTodo);
  },

  [MUTATIONS.MUTATE_TODO](state, updatedTodo) {
    state.AllTodos = state.AllTodos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    message.success("Todo updated!", 1);
  },

  [MUTATIONS.SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
};

export default mutations;
