<template>
  <form @submit.prevent="emitFormValues" action="" class="add-form">
    <div class="form-control">
      <label for="">Task</label>
      <input type="text" name="text" :value="task.text" />
    </div>
    <div class="form-control">
      <label for="">Day & Time</label>
      <input type="text" name="day" :value="task.day" />
    </div>
    <div class="form-control form-control-check">
      <label for="">Set Reminder</label>
      <input type="checkbox" name="reminder" :checked="task.reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "EditTask",
  props: {
    task: Object,
  },
  methods: {
    emitFormValues(e) {
      const { text, day, reminder } = e.target.elements;

      const editedTaskData = {
        text: text.value,
        day: day.value,
        reminder: reminder.checked,
      };

      // Check if no edits where made
      const isSameData = () => {
        const { task } = this.$props;
        const currentTaskData = {
          text: task.text,
          day: task.day,
          reminder: task.reminder,
        };

        // for every key in editedTaskData Object, check if that key/property's value is the same as the current value
        return Object.keys(editedTaskData).every(
          (key) => currentTaskData[key] === editedTaskData[key]
        );
      };

      // return if data is same (no edit was made)
      if (isSameData()) return;

      this.$emit("edit-task", editedTaskData);
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-inline: 5px;
  padding: 10px;
}

.form-control {
  margin: 0.5em 0;
}

.form-control label {
  display: block;
  margin-block: 0.25em;
}

.form-control input {
  width: 100%;
  font-size: 1rem;
  padding: 0.3em 0.5em;
}

.form-control-check {
  display: flex;
  align-items: center;
  gap: 2em;
}

.form-control-check input {
  height: 20px;
  width: 20px;
}
</style>
