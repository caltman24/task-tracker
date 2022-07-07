<template>
  <div>
    <div
      @click="onClick(task)"
      :class="[task.reminder ? 'reminder' : '', 'task']"
    >
      <h3>
        {{ task.text }}
        <i class="fas fa-times" @click="$emit('delete-task', task.id)"></i>
      </h3>
      <p>{{ task.day }}</p>
    </div>
    <EditTask
      v-show="toggleEditTask"
      @edit-task="$emit('edit-task', editedTask, task.id)"
    />
  </div>
</template>
<!-- TODO: Close edit menu from one component if another component is clicked -->
<script>
import EditTask from "./EditTask";
export default {
  name: "TaskItem",
  props: {
    task: Object,
  },
  components: {
    EditTask,
  },
  emits: ["edit-task"],
  methods: {
    onClick() {
      this.toggleEditTask = !this.toggleEditTask;
    },
  },
  data() {
    return {
      toggleEditTask: false,
    };
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
