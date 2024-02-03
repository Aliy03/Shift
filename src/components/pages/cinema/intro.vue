<template>
  <section class="intro">
    <div class="img-container">
      <img :src="getImage" :alt="getDescription">
      <span> и снова статика </span>
    </div>

    <div class="content">
      <h1> {{getTitle}}</h1>
      <span class="sub-static"> {{getDescription}} </span>
      <div>
        <star-svg active/>
        <star-svg active/>
        <star-svg active/>
        <star-svg/>
        <star-svg/>
        <star-svg/>
        <star-svg/>
        <star-svg/>
      </div>
      <span class="sub-static"> и еще не много статики</span>

      <p class="subtitle" :class="{'subtitle_show': showText}">
        РЫБА: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur dolor nemo nobis non odio quo. Adipisci cum ea esse expedita fugit, harum inventore ipsam iste laudantium maxime quis ratione!
      </p>
      <button class="show-btn" @click="toggleText"> {{ showText ? messages.hide : messages.show }} </button>
    </div>
  </section>
</template>

<script>
import {CinemaItem} from "@/modules/cinema-item";
import StarSvg from "@/assets/svg/star.vue";
export default {
  name: 'Cinema-Intro',
  components: {StarSvg},
  props: {
    film: {
      require: true,
      type: CinemaItem
    }
  },

  data(){
    return {
      messages: {
        show: 'Показать',
        hide: 'Скрыть'
      },
      showText: false
    }
  },

  computed: {
    getImage() {
      return this.film.getImage()
    },

    getDescription() {
      return this.film.getDescription()
    },

    getTitle() {
      return this.film.getTitle();
    },

    getId() {
      return this.film.getId()
    }
  },

  methods: {
    toggleText() {
      this.showText = !this.showText
    }
  }
}
</script>

<style lang="scss" scoped>

.intro {
  display: flex;
  gap: 32px;
  margin-bottom: 48px;

  .img-container {
    position: relative;
    img {
      width: 300px;
      height: 300px;
      border-radius: 8px 8px 0 8px;
    }

    span {
      position: absolute;
      right: 0;
      bottom: 0;

      border-radius: 8px 0 0 0;
      background: rgba(245, 245, 248, 1);

      width: 110px;
      height: 48px;

      display: flex;
      text-align: center;
    }
  }

  .content {
    h1 {
      margin-bottom: 4px;
    }
    .sub-static {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;


      display: inline-block;
      color: rgba(99, 112, 131, 1);
      margin-bottom: 16px;
    }

    .subtitle {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 10px;

      &_show{
        display: block;
      }
    }

    .show-btn {
      background: transparent;
      border: none;
      padding: 0;

      font-size: 16px;
      font-weight: 400;
      line-height: 24px;

      color: rgba(151, 161, 175, 1);

      cursor: pointer;
    }
  }
}

</style>
