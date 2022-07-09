<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskItem
      @delete-task="$emit('delete-task', task.id)"
      @edit-task="emitEditedTask"
      @toggle-edit-menu="handleEditMenu"
      :editTaskInfo="editTaskInfo"
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
    handleEditMenu(id) {
      const isSameTask = this.editTaskInfo.open && this.editTaskInfo.id === id;
      isSameTask ? this.openEditMenu() : this.closeEditMenu(id);
    },
    openEditMenu() {
      this.editTaskInfo = { ...this.editTaskInfo, open: false, id: null };
    },
    closeEditMenu(id) {
      this.editTaskInfo = { ...this.editTaskInfo, open: true, id };
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
