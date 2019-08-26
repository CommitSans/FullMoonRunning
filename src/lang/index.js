import Vue from 'vue';
import VueI18n from 'vue-i18n';

import localeES from './es.json';
import localeEN from './en.json';

Vue.use(VueI18n);

const messages = {
  es: Object.assign({}, localeES),
  en: Object.assign({}, localeEN),
};

// Check browser language, and decide the best locale to set
const userLang = navigator.language || navigator.userLanguage;
let locale = 'en';

if (userLang.toLowerCase().indexOf('es') >= -1) {
  locale = 'es';
}

const i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages,
});

// window.i18n = i18n;

export default i18n;
