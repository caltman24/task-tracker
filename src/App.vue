<!-- Template is the output whcih is HTML -->
<template>
  <div class="container">
    <HeaderItem
      title="Task Tracker"
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
    />
    <router-view :showAddTask="showAddTask"></router-view>
  </div>
  <FooterItem />
</template>

<script>
import HeaderItem from "./components/HeaderItem";
import FooterItem from "./components/FooterItem";

export default {
  name: "App",
  components: {
    HeaderItem,
    FooterItem,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import "../src/assets/main.css";
</style>
