<template>
  <div class="container cinema">
    <button class="goBack" @click="goBack">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.86368 10.409C7.16144 10.7052 7.16205 11.1869 6.86504 11.484C6.56857 11.7804 6.08788 11.7804 5.79141 11.484L1.03386 6.7264C0.643909 6.33646 0.64325 5.70443 1.03238 5.31367L5.76629 0.559955C6.06265 0.262355 6.5443 0.261852 6.84129 0.558834C7.13783 0.855377 7.13783 1.33617 6.84129 1.63271L2.45323 6.02077L6.86368 10.409Z"/>
      </svg>

      Назад
    </button>

    <CinemaIntro v-if="getFilm" :film="getFilm" />
    <CinemaTimetable v-if="getDate" :date="getDate"/>

  </div>
</template>

<script>


import CinemaIntro from "@/components/pages/cinema/intro.vue";
import {Cinema} from "@/modules/cinema";
import CinemaTimetable from "@/components/pages/cinema/timetable/timetable.vue";

export default {
  name: 'Cinema-Page',
  components: {CinemaTimetable, CinemaIntro },
  props: ['id'],

  computed: {
    dataModel() {
      return this.$store.getters['rpc/getCinemaFilm'];
    },

    getFilm() {
      if (this.dataModel instanceof Cinema) {
        return this.dataModel.getFilm();
      }
      return false
    },

    getDate() {
      if (this.dataModel instanceof Cinema) {
        return this.dataModel.getDate();
      }
      return false
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },

  created() {
    this.$store.dispatch('rpc/CINEMA_FILM', this.id);
    this.$store.dispatch('bye/INIT_BYE_MODEL');

  }
}
</script>


<style scoped lang="scss">
  .cinema {
    position: relative;
  }

  .goBack {
    position: absolute;
    top: -24px;
    transform: translateY(-50%);

    background: transparent;
    border: none;

    display: flex;
    align-items: center;
    gap: 15px;
    color: #97A1AF;

    cursor: pointer;

    svg {
      fill: #97A1AF;
    }
    &:hover{
      color: red;
      svg {
        fill: red;
      }
    }
  }
</style>
