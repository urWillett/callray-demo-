import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import AudioRecorder from 'vue-audio-recorder'

//来关闭生产模式下给出的提示
Vue.config.productionTip = false


Vue.use(VueAxios,axios);
Vue.use(elementUI);
Vue.use(AudioRecorder);

/* eslint-disable no-new */
new Vue({
  el: '#app',

  // 配置路由
  router,
  components: { App },
  template: '<App/>'
})
