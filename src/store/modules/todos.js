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
    commit('setTodos', response.data.slice(0,20));
  },
  async addTodo({ commit }, title){
    let response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {title, completed: false, id: Math.floor(Math.random().toString().slice(2,9))}
    );
    commit('addTodo', response.data);
  },
  async Delete({ commit }, id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  },
  async limitedFn({commit}, e){
    let limitNum = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limitNum}`);
    commit('setTodos', response.data);
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};
export default {
  state,
  getters,
  actions,
  mutations
};
