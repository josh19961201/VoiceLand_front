import router from './router'
import pinia from './pinia'

export async function registerPlugins (app) {
  app.use(pinia)
  app.use(router)
}
