import { createApp } from 'vue'
import router from "@/router/router";
import App from './App.vue'
import store from '@/store/index'

createApp(App).use(store).use(router).mount('#app')
