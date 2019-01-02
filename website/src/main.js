// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLifeRing, faStore, faUsers, faUser, faDownload, faExclamationTriangle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWindows, faApple, faLinux, faChrome, faFirefox, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faExternalLinkAlt, faLifeRing, faStore, faUsers, faUser, faDownload, faGithub, faWindows, faApple, faLinux, faChrome, faFirefox, faExclamationTriangle, faDiscord)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
