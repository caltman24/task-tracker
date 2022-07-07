<template>
  <form action="" class="add-form">
    <div class="form-control">
      <label for="">Task</label>
      <input type="text" name="text" v-model="this.$parent.task.text" />
    </div>
    <div class="form-control">
      <label for="">Day & Time</label>
      <input type="text" name="day" v-model="this.$parent.task.day" />
    </div>
    <div class="form-control form-control-check">
      <label for="">Set Reminder</label>
      <input type="checkbox" name="reminder" v-model="this.$parent.task.reminder" />
    </div>

    <!-- <input type="submit" value="Save Task" class="btn btn-block" /> -->
  </form>
</template>

<script>
export default {
  name: "EditTask",
  props: {
    task: Object,
  },
  data() {
    return {
      text: this.$parent.task.text,
      day: this.$parent.task.day,
      reminder: this.$parent.task.reminder,
    };
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
