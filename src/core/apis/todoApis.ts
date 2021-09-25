import $instance from "./axiosConfig";
import { AxiosResponse } from "axios";
import { ITodo } from "../../types/ITodo";
const RESOURCE = "/todos";
const LIMIT = 20;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (resource: string) => $instance.get(resource).then(responseBody),
  post: (resource: string, body: { title: string; completed: boolean }) =>
    $instance.post(resource, body).then(responseBody),
  put: (resource: string, body: ITodo) =>
    $instance.put(resource, body).then(responseBody),
  delete: (resource: string) => $instance.delete(resource).then(responseBody),
};

export default {
  fetchToDos: (): Promise<ITodo[]> =>
    requests.get(`${RESOURCE}/?_limit=${LIMIT}`),
  post: (todoBody: { title: string; completed: boolean }): Promise<ITodo[]> =>
    requests.post(RESOURCE, todoBody),
  put: (updatedTodo: ITodo): Promise<ITodo> =>
    requests.put(`${RESOURCE}/${updatedTodo.id}`, updatedTodo),
  delete: (id: number): Promise<void> => requests.delete(`${RESOURCE}/${id}`),
};
