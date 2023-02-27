import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { registerPlugins } from '@/plugins'

(async () => {
  const app = createApp(App)
  await registerPlugins(app)
  app.mount('#app')
})()
