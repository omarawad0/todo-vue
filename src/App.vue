<template>
  <div id="app">
    <AddToDo />
    <Todos />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddToDo from "./components/AddToDo.vue";
import Todos from "./components/Todos.vue";

export default defineComponent({
  name: "App",
  components: {
    AddToDo,
    Todos,
  },
});
</script>

<style>
#app {
  max-width: 1200px;
  margin: 5rem auto 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
