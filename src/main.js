// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex-store';
import "../styles/admin-OA.less"
import "../styles/tcd-form-design.less"

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

