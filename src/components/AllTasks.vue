<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskItem
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  name: "AllTasks",
  props: {
    tasks: Array,
  },
  components: {
    TaskItem,
  },
  data() {
    return {
      editTaskInfo: {
        open: false,
        id: null,
      },
    };
  },
  emits: ["delete-task"],
};
</script>
