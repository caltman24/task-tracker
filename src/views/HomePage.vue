<template>
  <Transition>
    <AddTask @add-task="addTask" v-show="showAddTask" />
  </Transition>
  <AllTasks @delete-task="deleteTask" :tasks="tasks" @edit-task="editTask" />
</template>

<script>
import AllTasks from "../components/AllTasks";
import AddTask from "../components/AddTask";

export default {
  name: "HomePage",
  components: {
    AllTasks,
    AddTask,
  },
  props: {
    showAddTask: Boolean,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async editTask(editedTask) {
      const { id } = editedTask;
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(editedTask),
      });

      const data = await res.json();
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) return data;
        return task;
      });
    },
    async addTask(newTask) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      const confirmed = confirm("Are you sure you want to delete this task?");
      if (!confirmed) return;
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      });

      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
        : alert("Error deleting task");
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      return await res.json();
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      return await res.json();
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
