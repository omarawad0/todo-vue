<template>
  <textarea
    :id="todo.id"
    type="text"
    :value="todo.title"
    :disabled="todo.completed"
    @change="editTodo(todo, 'title', $event.target.value)"
  />
  <div class="actions">
    <div @click="editTodo(todo, 'completion')">
      <a-checkbox :checked="todo.completed"> </a-checkbox>
    </div>

    <div @click="removeToDo(todo.id)">
      <DeleteOutlined />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapMutations } from "vuex";
import { DeleteOutlined } from "@ant-design/icons-vue";
import { ITodo } from "../types/ITodo";
export default defineComponent({
  name: "Todo",
  components: {
    DeleteOutlined,
  },
  props: {
    todo: {
      required: true,
      type: Object as PropType<ITodo>,
    },
  },
  methods: {
    ...mapMutations(["mutateTodo"]),
    ...mapActions(["removeToDo", "updateTodo"]),

    editTodo(todo: ITodo, status: "title" | "completion", newTitle?: string) {
      const updatedTodo =
        status === "title"
          ? { ...todo, title: newTitle }
          : { ...todo, completed: !todo.completed };
      // JsonPlaceHolder server limits any update requests to less than 201 todos only
      if (todo.id > 200) {
        this.mutateTodo(updatedTodo);
      } else {
        this.updateTodo(updatedTodo);
      }
    },
  },
});
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  column-gap: 5px;
}
::v-deep(.anticon-delete) {
  color: red;
  cursor: pointer;
}

textarea {
  border: 1px solid transparent;
  background-color: inherit;
  width: 100%;
}

.completed textarea {
  text-decoration: line-through;
}
</style>
