<template>
  <div>
    <div
      @click="toggleEditMenu"
      :class="[task.reminder ? 'reminder' : '', 'task']"
    >
      <h3>
        {{ task.text }}
        <i class="fas fa-times" @click="$emit('delete-task', task.id)"></i>
      </h3>
      <p>{{ task.day }}</p>
    </div>
    <Transition
      ><EditTask
        v-show="editTaskInfo.open && editTaskInfo.id === task.id"
        @edit-task="catchTask"
        :task="task"
    /></Transition>
  </div>
</template>

<script>
import EditTask from "./EditTask";
export default {
  name: "TaskItem",
  props: {
    task: Object,
    editTaskInfo: Object,
  },
  components: {
    EditTask,
  },
  emits: ["edit-task", "toggle-edit-menu"],
  methods: {
    toggleEditMenu() {
      const { id } = this.$props.task;
      this.$emit("toggle-edit-menu", id);
    },
    catchTask(editedTaskData) {
      const { id } = this.$props.task;
      const editedTask = { ...editedTaskData, id };
      this.$emit("edit-task", editedTask);
    },
  },
};
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: hsla(0, 0%, 100%, 0.4);
  box-shadow: -1px -1px 10px -4px rgba(0, 0, 0, 0.6);
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}
.task.reminder {
  border-left: 12px solid green;
  transition: border 300ms ease;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

i {
  transform: scale(1.2);
}
</style>
