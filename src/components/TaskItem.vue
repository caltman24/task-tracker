<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i class="fas fa-times" @click="$emit('delete-task', task.id)"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: Object,
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
