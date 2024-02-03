<template>
  <section class="container">
    <h1 class="title">{{message.title}}</h1>
    <ul class="cinema-list">
      <CinemaItem v-for="item in cinemaToday" :key="item.getId()" :item="item"/>
    </ul>
  </section>
</template>

<script>

import CinemaItem from "@/components/pages/home/cinema-item.vue";

export default {
  name: 'Home-Page',
  components: {CinemaItem},
  data() {
    return {
      message: {
        title: 'Афиша'
      }
    }
  },

  computed: {
    cinemaToday() {
      return this.$store.getters['rpc/getCinemaToday']
    }
  },

  created() {
    this.$store.dispatch('rpc/CINEMA_TODAY');
  }
}
</script>


<style scoped lang="scss">
  .title {
    margin-bottom: 16px;
  }

  .cinema-list {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
</style>
