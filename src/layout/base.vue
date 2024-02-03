<template>
  <div>
    <BaseHeader/>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>


import BaseHeader from "@/components/base/header.vue";

export default {
  name: 'MainLayout',
  components: {BaseHeader},
}
</script>

<style lang="scss">
  .container {
    width: 990px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .main {
    padding-top: 48px;
  }
</style>
