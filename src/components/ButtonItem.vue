<template>
  <!-- Can use v-bind:style or just :style to pass in props and register as js -->
  <button @click="onClick()" v-bind:style="{ background: color }">
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
      console.log("Clicked");
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition: transform 300ms ease;
}

button:hover {
  transform: scale(1.01) translateY(-0.75px);
  transition: transform 200ms ease;
}

button:focus {
  outline: none;
}

button:active {
  transform: scale(0.98);
}
</style>
