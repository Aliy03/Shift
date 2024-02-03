<template>
  <section class="schedule">
    <h2 class="schedule__title">{{ messages.title }}</h2>

    <ul class="schedule__list" v-if="date">
      <button
          v-for="item in date"
          :key="item.startDate"
          @click="changeDays(item)"

          class="schedule__list__item"
          :class="{'schedule__list__item_active': activeId === item.id}"
      >
        <span class="days">
          {{ item.getDays() }}
        </span>
      </button>
    </ul>

    <ul class="rooms-list" v-if="rooms">
      <li
          v-for="room in rooms"
          :key="room.id"
          class="rooms-list__item"
      >
        <p class="rooms-list__room">
          {{ room.getRoom() }}
        </p>

        <ul class="time-list">
          <li
              v-for="(time, index) in room.getTimes()"
              :key="index"
          >
            <button
                :class="{'active-time': time === activeTime}"
                @click="changeTime(time, room)"
            >
              <span>{{time}}</span>
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'Cinema-Schedule',
  props: {
    date: {
      require: true,
      type: Array
    }
  },

  watch: {
    date: {
      handler() {
        this.changeDays();
      },
      deep: true
    }
  },

  data(){
    return {
      messages: {
        title: 'Расписание'
      },
      activeDays: null,
      activeTime: null
    }
  },

  computed: {
    byeModel() {
      return this.$store.getters['bye/getByeModel']
    },

    rooms() {
      if (this.activeDays) {
        return this.activeDays.getRooms()
      }
      return []
    },

    activeId() {
      if (this.activeDays) {
        return this.activeDays.id;
      }
      return 0;
    }
  },

  methods: {
    changeDays(days = this.date[0]) {
      this.activeDays = days;
      this.activeTime = null;
      this.byeModel.setDay(this.activeDays.getDays());
      this.byeModel.setHall('');
      this.byeModel.setTime('');
    },

    changeTime(time, room) {
      this.activeTime = time;
      this.byeModel.setTime(time);
      this.byeModel.setHall(room.getRoom())
    }
  },

  beforeMount() {
    this.changeDays();
  }
}
</script>

<style lang="scss" scoped>
.schedule {
  margin-bottom: 48px;

  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;

    margin-bottom: 24px;
  }

  &__list{
    display: flex;
    background: rgba(245, 245, 248, 1);
    padding: 3px;
    border-radius: 10px;
    width: min-content;
    margin-bottom: 24px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 16px;

      position: relative;
      outline: none;
      border: none;
      cursor: pointer;

      &_active{
        background: white;
        border-radius: 10px;
        &:after {
          display: none !important;
        }
      }

      &:not(:last-child) {
        &:after {
          content: '';
          display: block;
          width: 1px;
          height: 70%;

          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(-50%, -50%);
          background: rgba(206, 210, 218, 1);
        }
      }

      .days {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        color: rgba(99, 112, 131, 1);
        white-space: nowrap;
      }


    }
  }

  .rooms-list {

    &__item {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &__room{
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      color: rgba(52, 64, 81, 1);

      margin-bottom: 16px;
    }

    .time-list {
      display: flex;
      gap: 8px;

      button {
        padding: 10px 16px;
        border-radius: 16px;
        background: white;
        outline: none;
        border: 1px solid rgba(206, 210, 218, 1);
        cursor: pointer;
        transition: transform 0.5s;
        &:active {
          transform: scale(0.9);
        }

        span {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          color: rgba(20, 28, 36, 1);

        }
      }

      .active-time {
        background: rgba(151, 161, 175, 1);
        border-color: rgba(151, 161, 175, 1);
        span {
          color: white;
        }
      }
    }
  }
}

</style>
