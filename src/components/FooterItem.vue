<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "FooterItem",
};
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 3em;
  margin-inline: auto;
  box-shadow: 5px 5px 25px -8px rgba(0, 0, 0, 0.7);
  max-width: 95%;
  border-radius: 10px;
}

a {
  color: rgba(255, 255, 255, 0.8);
}
</style>
