<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="todos-container container">
      <div class="row">
        <div :class="width" v-for="todo in allTodos">
          <div :key="todo.id" :class="[singleTodo, {completed: todo.completed}]">
            <h2>{{ todo.title }}<h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    data(){
      return {
        singleTodo: 'singleTodo',
        width: 'col-md-4'
      }
    },
    name: 'home',
    methods: {
      ...mapActions(["fetchTodos"])
    },
    computed: mapGetters(["allTodos"]),
    created(){
        this.fetchTodos();
    }
  }
</script>

<style>
body{
  padding: 20px;
  background: #e6e6e6;
}
/* .todos-container{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
} */
.singleTodo{
  height: 200px;
  padding: 5px;
  overflow: auto;
  background: #6f6f6f;
  color: #fff;
  margin: 2px;
  text-align: center;
  word-wrap: break-word;
}
.completed{
  background: #5d8e56;
  color: #fff;
  position: relative;
}
.completed::after{
  content: '✔';
  position: absolute;
  font-size: 30px;
  right: 5px;bottom: 5px;
  color: #0080ff;
}
</style>
