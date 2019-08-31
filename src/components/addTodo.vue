<template>
  <div class="container">
    <div class="form-group">
      <form @submit="addAtodo">
        <label>Add Todo</label>
        <div class="row">
          <div class="col-md-8">
            <input class="form-control" v-model="title" required />
            <!-- <p>{{title}}</p> -->
          </div>
          <div class="col-md-4">
            <input type="submit" value="Add" class="form-control btn btn-primary" />
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    data(){
      return {
        title: ''
      }
    },
    name: 'AddTodo',
    methods: {
      ...mapActions(["addTodo"]),
      addAtodo(e){
        e.preventDefault();
        this.addTodo(this.title);
        this.title = ''
      }
    }
    // computed: mapGetters(["allTodos"]),
    // created(){
    //     this.fetchTodos();
    // }
  }
</script>

<style scoped>
input{
  margin: 5px;
}

</style>
