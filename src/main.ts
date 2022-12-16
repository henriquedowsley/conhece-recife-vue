import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { IonicVue } from '@ionic/vue'

import './assets/scss/normalize.scss'
import './assets/scss/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faAngleUp, faAngleDown)

const pinia = createPinia()
const app = createApp(App).use(IonicVue).use(router).use(pinia)

router.isReady().then(() => {
  app.component('font-awesome-icon', FontAwesomeIcon)
  app.mount('#app')
})
