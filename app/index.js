import Vue from 'vue'  //引入主角vue.js，这里是因为在webpack.config中进行配置地址了
import App from './index.vue'

new Vue({
    el: '#app',
    components:{
        app: App,
    }
})