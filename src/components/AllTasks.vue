<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskItem
      @delete-task="$emit('delete-task', task.id)"
      @edit-task="emitEditedTask"
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
  methods: {
    emitEditedTask(editedTask) {
      this.$emit("edit-task", editedTask);
    },
  },
  data() {
    return {
      editTaskInfo: {
        open: false,
        id: null,
      },
    };
  },
  emits: ["delete-task", "edit-task"],
};
</script>
