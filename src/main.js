import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

//createApp(App).mount('#app')

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(router).use(vuetify).mount('#app')