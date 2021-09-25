import { message } from "ant-design-vue";
import todoApis from "../../../core/apis/todoApis";
import { ActionContext, ActionTree } from "vuex";
import { ACTIONS, MUTATIONS } from "@/types/ETodo";
import { Actions } from "../types.";
import { StateRoot } from "@/types/ITodo";

const actions: ActionTree<StateRoot, StateRoot> & Actions = {
  [ACTIONS.FETCH_ALL_TODOS](context: ActionContext<StateRoot, StateRoot>) {
    context.commit(MUTATIONS.SET_LOADING, true);
    return todoApis
      .fetchToDos()
      .then((responseData) => {
        context.commit(MUTATIONS.ADD_TO_DOS, responseData);
        context.commit(MUTATIONS.SET_LOADING, false);
      })
      .catch((err) => {
        message.error(err);
        context.commit(MUTATIONS.SET_LOADING, false);
      });
  },

  [ACTIONS.ADD_TO_DO](context: ActionContext<StateRoot, StateRoot>, title) {
    context.commit(MUTATIONS.SET_LOADING, true);
    return todoApis
      .post({ title, completed: false })
      .then((responseData) => {
        context.commit(MUTATIONS.ADD_TO_DO, {
          ...responseData,
          id: context.state.AllTodos.length,
        });
        message.success("Todo added!", 1);
        context.commit(MUTATIONS.SET_LOADING, false);
      })
      .catch((err) => {
        message.error(err);
        context.commit(MUTATIONS.SET_LOADING, false);
      });
  },

  [ACTIONS.REMOVE_TODO](context: ActionContext<StateRoot, StateRoot>, id) {
    context.commit(MUTATIONS.SET_LOADING, true);
    return todoApis
      .delete(id)
      .then(() => {
        context.commit(MUTATIONS.REMOVE_TODO, id);
        message.success("Todo Removed!", 1);
        context.commit(MUTATIONS.SET_LOADING, false);
      })
      .catch((err) => {
        message.error(err);
        context.commit(MUTATIONS.SET_LOADING, false);
      });
  },

  [ACTIONS.UPDATE_TODO](
    context: ActionContext<StateRoot, StateRoot>,
    updatedTodo
  ) {
    context.commit(MUTATIONS.SET_LOADING, true);
    return todoApis
      .put(updatedTodo)
      .then((responseData) => {
        context.commit(MUTATIONS.MUTATE_TODO, responseData);
        context.commit(MUTATIONS.SET_LOADING, false);
      })
      .catch((err) => {
        message.error(err);
        context.commit(MUTATIONS.SET_LOADING, false);
      });
  },
};

export default actions;
