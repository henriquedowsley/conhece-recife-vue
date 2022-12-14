import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { IonicVue } from '@ionic/vue'

import './assets/scss/normalize.scss'
import './assets/scss/main.scss'

const pinia = createPinia()
const app = createApp(App).use(IonicVue).use(router).use(pinia)

router.isReady().then(() => {
  app.mount('#app')
})
