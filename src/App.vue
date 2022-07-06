<!-- Template is the output whcih is HTML -->
<template>
  <div class="container">
    <HeaderItem title="Task Tracker" @toggle-add-task="toggleAddTask" />
    <Transition>
      <div v-show="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
    </Transition>
    <AllTasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<!-- TODO: Create AddTask component -->

<script>
import HeaderItem from "./components/HeaderItem";
import AllTasks from "./components/AllTasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    HeaderItem,
    AllTasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask];
    },
    deleteTask(id) {
      const confirmed = confirm("Are you sure you want to delete this task?");
      if (confirmed) this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      });
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Dentist Appointment",
        day: "April 2nd at 1:45pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Metting at Office",
        day: "April 4th at 4:25pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Shopping",
        day: "April 5th at 12:00pm",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
@import "../src/assets/main.css";
</style>
