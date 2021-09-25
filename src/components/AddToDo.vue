<template>
  <div class="addToDoContainer">
    <a-input
      v-model:value="newTodoTitle"
      @keydown.enter="addNewTodo()"
      placeholder="Add Somthing To Do"
    />
    <a-button type="primary" size="large" @click="addNewTodo()">Add</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AddToDo",
  data() {
    return {
      newTodoTitle: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addNewTodo(): void {
      if (this.newTodoTitle.length > 0) {
        this.addTodo(this.newTodoTitle);
        this.newTodoTitle = "";
      }
    },
  },
});
</script>

<style scoped>
.addToDoContainer {
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.ant-input {
  border: 4px solid #f1eeff;
}
</style>
