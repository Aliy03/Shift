<template>
  <header class="header">
    <div class="header__container container">
      <nav class="nav">
        <router-link to="/"><LogoSvg/></router-link>
        <router-link to="/tickets">Профиль</router-link>
        <router-link to="/about">Билеты</router-link>
      </nav>

      <button class="btn-login">
        <LoginSvg/>
        Войти
      </button>
    </div>
  </header>
</template>

<script lang="js">
import { ref } from 'vue'
import LogoSvg from "@/assets/svg/logo.vue";
import LoginSvg from "@/assets/svg/login.vue";
export default {
  name: 'Base-Header',
  components: {LoginSvg, LogoSvg},
  setup() {
    const message = ref('Hello Vue 3')

    return {
      message
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 83px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #CED2DA;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav{
      display: flex;
      align-items: center;
      gap: 32px;

      a {
        color: #344051;
        line-height: 24px;
        font-weight: 500;
        text-decoration: none;
      }
    }

    .btn-login {
      display: flex;
      align-items: center;
      gap: 16px;

      background: transparent;
      border: none;
      cursor: pointer;

      &:hover {
        svg {
          fill: red;
        }

        color: red;
      }
    }
  }
</style>
