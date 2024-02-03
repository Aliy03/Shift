<template>
  <MainLayout/>
</template>

<script>

import MainLayout from "@/layout/base.vue";

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

body {
  margin: 0;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
}

ul {
  list-style: none;
  padding: 0;
}

h1,h2,p {
  margin-top: 0;
}
</style>
