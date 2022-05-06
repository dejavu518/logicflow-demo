import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VForm from 'vform-builds' //引入VForm库
import 'element-ui/lib/theme-chalk/index.css'
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import 'vform-builds/dist/VFormDesigner.css' //引入VForm样式

Vue.use(FormMaking)

Vue.use(ElementUI)
Vue.use(VForm)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')