import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import Particles from "@tsparticles/vue3";
import { loadSnowPreset } from '@tsparticles/preset-snow'
import '@mdi/font/css/materialdesignicons.css' 
loadFonts()

createApp(App)

createApp(App)
  .use(Particles, {
    init: async engine => {
      await loadSnowPreset(engine);
    },
  })
  .use(router)
  .use(VueGtag, {
    property: {
      id: 'G-HC4SYJNWCV',
      router
    }
  })
  .use(vuetify)
  .mount('#app')
