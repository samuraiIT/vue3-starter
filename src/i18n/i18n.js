import { createI18n } from 'vue-i18n'

import en from './en.json'
import fr from './fr.json'

const messages = {
    en,
    fr,
}

export default createI18n({
    locale: 'en',
    messages,
    silentTranslationWarn: true,
})
