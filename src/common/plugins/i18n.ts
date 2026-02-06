import { createI18n } from 'vue-i18n'
import ptBR from '../../modules/auth/i18n/pt-BR.json'
import en from '../../modules/auth/i18n/en.json'
import es from '../../modules/auth/i18n/es.json'

export const i18n = createI18n({
    legacy: false,
    locale: 'pt-BR',
    fallbackLocale: 'pt-BR',
    messages: {
        'pt-BR': ptBR,
        'en': en,
        'es': es
    }
})
