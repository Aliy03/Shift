<template>
  <li class="cinema-item">
    <div class="cinema-item__img-container">
      <img class="img" :src="getImage" :alt="getDescription"/>
      <div class="sub-info">
        <span> тут статика ибо времени нет !</span>
      </div>
    </div>
    <h2 class="title"> {{getTitle}} </h2>
    <p class="subtitle"> {{getDescription}} </p>
    <div class="star-block">
      <StarSvg active/>
      <StarSvg active/>
      <StarSvg active/>
      <StarSvg/>
      <StarSvg/>
    </div>
    <p class="subtitle">да тут тоже статика ибо по тз нет про кликабельные звездочки</p>

    <router-link :to="`/films/${getId}`" class="btn">Подробнее</router-link>
  </li>
</template>

<script>




import {CinemaItem} from "@/modules/cinema-item";
import StarSvg from "@/assets/svg/star.vue";

export default {
  components: {StarSvg},
  props: {
    item: {
      require: true,
      type: CinemaItem
    }
  },

  computed: {
    getImage() {
      return this.item.getImage()
    },

    getDescription() {
      return this.item.getDescription()
    },

    getTitle() {
      return this.item.getTitle();
    },

    getId() {
      return this.item.getId()
    }
  },

  name: 'Cinema-Item',

}
</script>

<style lang="scss" scoped>
  .cinema-item {
    width: 300px;

    &__img-container{
      position: relative;
      margin-bottom: 16px;

      .img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px 8px 0 8px;
      }

      .sub-info {
        width: 110px;
        height: 50px;
        background: #F5F5F8;

        position: absolute;
        right: 0;
        bottom: 0;

        border-radius: 8px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 10px;
          text-align: center;
        }
      }
    }


    .title {
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      color: rgba(20, 28, 36, 1);

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subtitle {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(99, 112, 131, 1);

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn {
      background: rgba(149, 52, 210, 1);
      color: rgba(255, 255, 255, 1);
      width: 100%;
      height: 56px;

      border-radius: 16px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;

      &:hover {
        background: red;
      }
    }
  }
</style>
