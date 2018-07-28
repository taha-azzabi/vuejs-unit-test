<template>
  <div>
    <h1>My To Do List</h1>
    <input v-model="newItem" >
    <button @click="addItemToList">Add</button>
    </br>
    <!--displays list -->
    <ul>
      <li 
        v-for="(item,index) in listItems"
        :key='index'
      >
        {{ item }}
        <button :class="'delete-item' + index" @click.stop.prevent="deleteTodo(item)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      newItem: ''
    };
  },
  methods: {
    addItemToList() {
      this.listItems.push(this.newItem);
      this.newItem = '';
    },
    deleteTodo (toDo) {
      this.listItems.splice(this.listItems.indexOf(toDo), 1)
    }
  }
};
</script>
