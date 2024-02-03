<template>
  <div class="timetable">
      <CinemaSchedule v-if="date" :date="date"/>
      <div class="bye-wrapper">
        <CinemaLocation />
        <CinemaBye />
      </div>

  </div>
</template>

<script>

import CinemaSchedule from "@/components/pages/cinema/timetable/schedule.vue";
import CinemaLocation from "@/components/pages/cinema/timetable/location.vue";
import CinemaBye from "@/components/pages/cinema/timetable/bye.vue";

export default {
  name: 'Cinema-Timetable',
  components: {CinemaBye, CinemaLocation, CinemaSchedule},
  props: {
    date: {
      type: Array,
      require: true
    }
  },


}
</script>

<style lang="scss" scoped>
  .bye-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>
