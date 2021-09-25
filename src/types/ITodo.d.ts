export interface ITodo {
  userid: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface StateRoot {
  AllTodos: ITodo[];
  loading: boolean;
}

export type Store = Omit<
  VuexStore<StateRoot>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
