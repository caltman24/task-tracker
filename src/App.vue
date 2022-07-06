<!-- Template is the output whcih is HTML -->
<template>
  <div class="container">
    <HeaderItem title="Task Tracker" />
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
import AllTasks from "./components/AllTasks.vue";

export default {
  name: "App",
  components: {
    HeaderItem,
    AllTasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );
  background-size: cover;
  min-height: 100vh;
  padding-top: 4em;
}

.container {
  width: 35em;
  max-width: 95%;
  margin-inline: auto;
  overflow: auto;
  min-height: 300px;
  box-shadow: 5px 5px 25px -8px rgba(0, 0, 0, .7);
  background-color: rgba(255, 255, 255, 0.236);
  padding: 30px;
  border-radius: 10px;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
