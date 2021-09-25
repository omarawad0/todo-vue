import { createStore } from "vuex";
import ToDos from "./modules/toDos";
import { StateRoot } from "@/types/ITodo";
export default createStore<StateRoot>(ToDos);
