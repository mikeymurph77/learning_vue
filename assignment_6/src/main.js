import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Body from './Body.vue'
import Footer from './Footer.vue'

Vue.component('header-section', Header);
Vue.component('body-section', Body);
Vue.component('footer-section', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
