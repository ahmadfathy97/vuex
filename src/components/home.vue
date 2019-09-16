<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="todos-container container">
      <div class="row">
        <div class="col-md-12">
          <select @change="limitedFn($event)">
            <option value="10">10</option>
            <option value="20" selected>20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-4" @dblclick="Update(todo)" v-for="todo in allTodos">
          <div :key="todo.id"
                class="bg-light"
               :class="{completed: todo.completed}"
               >
            <button @click="Delete(todo.id)">X</button>
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
      ...mapActions(["fetchTodos", "Delete", "limitedFn", "Update"])
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
.col-md-4{
  padding: 8px !important
}
.col-md-4 div{
  height: 120px;
  overflow: auto;
}
.completed{
  background: #5d8e56 !important;
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
