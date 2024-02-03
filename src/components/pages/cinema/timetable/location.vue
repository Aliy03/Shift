<template>
  <section class="location">
    <h2 class="location__title">{{messages.title}}</h2>

    <div class="location__container">
      <div class="screen">
        <p>{{messages.screen}}</p>
      </div>

      <div class="location-sections">
        <ul>
          <li v-for="item in series" :key="item">
            <button
                :class="{'btn-active': item === activeSeries && btn === activeChair}"
                v-for="btn in chair" :key="btn"
                @click="changeChair(item, btn)"
            >
              <div>
                <span>{{item + messages.series}}</span>
                <span>{{btn + messages.chair}}</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  name: 'Cinema-Location',

  data(){
    return {
      messages: {
        title: 'Выбор места',
        screen: 'Экран',
        series: ' - ряд',
        chair: ' - места'
      },
      series: 6,
      chair: 10,
      activeSeries: null,
      activeChair: null,
    }
  },

  computed: {
    byeModel() {
      return this.$store.getters['bye/getByeModel']
    }
  },

  methods: {
    changeChair(series, chair) {
      this.activeSeries = series
      this.activeChair = chair
      this.byeModel.setSeries(series)
      this.byeModel.setChair(chair)
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    color: rgba(20, 28, 36, 1);

    margin-bottom: 24px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 400px;
  }
  .screen {
    width: 100%;
    padding-bottom: 8px;

    border-bottom: 4px solid rgba(206, 210, 218, 1);

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      margin: 0;
    }
  }
  .location-sections {
    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;
      li {
        display: flex;
        gap: 26px;

        button {
          position: relative;

          width: 16px;
          height: 16px;

          background: rgba(113, 45, 156, 1);
          border-radius: 4px;

          outline: none;
          border: none;

          cursor: pointer;
          transition: transform 0.3s;

          &:hover {
            div {
              opacity: 1;
              transition: opacity 0.3s;
            }
          }
          div {
            pointer-events: none;
            display: flex;
            opacity: 0;
            flex-direction: column;
            gap: 5px;

            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, calc(-100% - 5px));
            transition: opacity 0.3s;

            padding: 8px 16px;
            background: #97A1AF;
            border-radius: 8px;

            &:after {
              content: '';
              position: absolute;
              left: 50%;
              bottom: 0;
              width: 0;
              height: 0;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-top: 6px solid #97A1AF;
              transform: translate(-50%, 95%);
            }

            span {
              white-space: nowrap;
              color: white;
            }
          }
        }

        .btn-active {
          transform: scale(1.6);
        }
      }
    }
  }
}

</style>
