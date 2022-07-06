<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonItem @toggle-add-task="$emit('toggle-add-task')" text="Add Task" color="green"/>
  </header>
</template>

<script>
import ButtonItem from './ButtonItem';

export default {
  name: "HeaderItem",
  components: {
    ButtonItem
  },
  props: {
    title: String
  }
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
