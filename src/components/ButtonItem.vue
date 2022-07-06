<template>
  <!-- Can use v-bind:style or just :style to pass in props and register as js -->
  <button @click="onClick()" v-bind:style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    text: String,
    color: {
      type: String,
      default: "black",
    },
  },
  methods: {
    onClick() {
      this.$emit('toggle-add-task')
    },
  },
};
</script>
