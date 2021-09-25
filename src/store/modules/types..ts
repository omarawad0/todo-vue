import { ActionContext } from "vuex";
import { StateRoot, ITodo } from "@/types/ITodo";
import { ACTIONS, GETTERS, MUTATIONS } from "@/types/ETodo";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
  getters<K extends keyof Getters>(
    key: K,
    payload: Parameters<Getters[K]>[1]
  ): ReturnType<Getters[K]>;
} & Omit<ActionContext<StateRoot, StateRoot>, "commit">;

export interface Actions {
  [ACTIONS.FETCH_ALL_TODOS]({ commit }: AugmentedActionContext): Promise<void>;
  [ACTIONS.ADD_TO_DO](
    { commit }: AugmentedActionContext,
    title: string
  ): Promise<void>;
  [ACTIONS.REMOVE_TODO](
    { commit }: AugmentedActionContext,
    id: number
  ): Promise<void>;
  [ACTIONS.UPDATE_TODO](
    { commit }: AugmentedActionContext,
    updatedTodo: ITodo
  ): Promise<void>;
}

export type Mutations<S = StateRoot> = {
  [MUTATIONS.ADD_TO_DOS](state: S, toDos: ITodo[]): void;
  [MUTATIONS.ADD_TO_DO](state: S, newTodo: ITodo): void;
  [MUTATIONS.REMOVE_TODO](state: S, id: number): void;
  [MUTATIONS.MUTATE_TODO](state: S, updatedTodo: ITodo): void;
  [MUTATIONS.SET_LOADING](state: S, payload: boolean): void;
};

export type Getters = {
  [GETTERS.ALL_TO_DOS](state: StateRoot): ITodo[];
  [GETTERS.LOADING](state: StateRoot): boolean;
};
