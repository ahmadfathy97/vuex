<template>
  <div id="app">
    <AddTodo />
    <home />
  </div>
</template>

<script>
import home from './components/home.vue';
import AddTodo from './components/addTodo.vue';
export default {
  name: 'app',
  components: {
    home,
    AddTodo
  }
}
</script>

<style>
</style>
