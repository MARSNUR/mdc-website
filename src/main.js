import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'jquery/src/jquery.js';
import "bootstrap/dist/js/bootstrap.min.js";
// import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css";

import { Languages } from './i18n';
import { defaultLocale } from './i18n';
import { createI18n, useI18n } from 'vue-i18n';

const messages = Object.assign(Languages)
const i18n = createI18n({
   legacy: false,
   locale: defaultLocale,
   fallbackLocale: 'en',
   messages
})

createApp(App, {
   setup() {
      const {t} = useI18n()
      return {t}
   }
})
   .use(i18n)
   .use(store)
   .use(router)
   .mount('#app')
