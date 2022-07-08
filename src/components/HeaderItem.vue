<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonItem
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'Red' : 'Green'"
    />
  </header>
</template>

<script>
import ButtonItem from "./ButtonItem";

export default {
  name: "HeaderItem",
  components: {
    ButtonItem,
  },
  props: {
    title: String,
    showAddTask: Boolean,
  },
  computed: {
    homePage() {
      return this.$route.path === "/" ? true : false;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
