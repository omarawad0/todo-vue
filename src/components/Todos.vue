<template>
  <a-list :data-source="allTodos">
    <a-spin v-if="loading" size="large" :spinning="loading" />
    <div class="toDos">
      <a-list-item
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="todo.completed ? 'completed' : ''"
      >
        <Todo :todo="todo" />
      </a-list-item>
    </div>
  </a-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Todo from "./Todo.vue";

export default defineComponent({
  name: "Todos",
  components: {
    Todo,
  },
  computed: {
    ...mapGetters(["allTodos", "loading"]),
  },
  methods: {
    ...mapActions(["fetchAllToDos"]),
  },

  created() {
    this.fetchAllToDos();
  },
});
</script>

<style scoped>
.toDos {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

.todo {
  background-color: #f1eeff;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  column-gap: 5px;
}

@media only screen and (min-width: 768px) {
  .toDos {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
