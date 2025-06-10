import type { App } from 'vue'
import { useSEO } from '@/composables/useSEO'

export default {
  install(app: App) {
    const seo = useSEO()

    app.config.globalProperties.$seo = seo
    app.provide('seo', seo)
  }
}
