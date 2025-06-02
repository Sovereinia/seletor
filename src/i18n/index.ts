import { createI18n } from 'vue-i18n'
import pt from '../locales/pt.json'
import en from '../locales/en.json'
import es from '../locales/es.json'

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'pt', // set default locale to Portuguese
  fallbackLocale: 'pt', // set fallback locale to Portuguese
  messages: {
    pt,
    en,
    es
  }
})

export default i18n 