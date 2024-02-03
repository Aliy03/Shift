<template>
  <section class="location">
    <div>
      <p class="location__title"> {{ messages.hall }} </p>
      <p class="location__description"> {{ hall }} </p>
    </div>
    <div>
      <p class="location__title" >{{ messages.date }}</p>
      <p class="location__description" >{{ date }}</p>
    </div>
    <div>
      <p class="location__title" >{{ messages.places }}</p>
      <p class="location__description" >{{ places }}</p>
    </div>
    <div>
      <p class="location__price">{{ messages.price }}</p>
    </div>

    <button class="location__bye">
      {{messages.bye}}
    </button>
  </section>
</template>

<script>

export default {
  name: 'Cinema-Bye',

  data(){
    return {
        messages: {
          hall: 'Зал',
          date: 'Дата и время',
          row: 'Ряд',
          places: 'Места',
          price: 'Сумма: нетю хоста :(',
          noData: 'Нет данных',
          bye: 'Купить'
        }
    }
  },

  computed: {
    byeModel: function() {
      return this.$store.getters['bye/getByeModel'];
    },

    places: function() {
      if (this.byeModel.series && this.byeModel.chair) {
        return this.messages.row + ' ' + this.byeModel.series + ' - ' + this.byeModel.chair
      }
      return this.messages.noData
    },

    hall: function() {
      return this.byeModel.hall || this.messages.noData
    },

    date: function() {
      if (this.byeModel.time && this.byeModel.day) {
        return this.byeModel.day + ' ' + this.byeModel.time
      }

      return this.messages.noData
    }
  }

}
</script>

<style lang="scss" scoped>
.location {
  &__title{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    color: rgba(99, 112, 131, 1);
    margin-bottom: 2px;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: rgba(20, 28, 36, 1);
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: rgba(20, 28, 36, 1);
  }

  &__bye {
    padding: 16px 130px;
    background: rgba(149, 52, 210, 1);

    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: white;

    border: none;
    border-radius: 16px;
    outline: none;

    cursor: pointer;

    transition: transform 0.3s;
    &:active {
      transform: scale(0.7);
    }
  }

}

</style>
