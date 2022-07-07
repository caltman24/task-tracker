<template>
  <form @submit="onSubmit" action="" class="add-form">
    <div class="form-control">
      <label for="">Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label for="">Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="">Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task name");
        return;
      }

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      const clearForm = () => {
        this.text = "";
        this.day = "";
        this.reminder = false;
      };

      this.$emit("add-task", newTask);

      clearForm();
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 2em;
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
  font-size: 1.15rem;
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
