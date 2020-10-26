import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import LyTab from "ly-tab";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/store.js'
Vue.use(MintUI)
Vue.use(LyTab);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')