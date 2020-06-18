import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.less'
import '@/styles/style.css'
import VueCompositionApi from '@vue/composition-api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueCompositionApi)

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
