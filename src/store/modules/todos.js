import axios from 'axios';
const state = {
  todos: []
};
const getters = {
  allTodos: state => state.todos
};
const actions = {
  async fetchTodos({ commit }){
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title){
    let response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {title, completed: false, id: Math.floor(Math.random().toString().slice(2,9))}
    );
    commit('addTodo', response.data);
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo)
};
export default {
  state,
  getters,
  actions,
  mutations
};
