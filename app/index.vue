<template>
  <div>
    <headerComponent></headerComponent>
    <h2>{{ msg }}</h2>
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
</template>
<script>
import Header from './components/layout/Header';
    export default {
        data() {
            return {
                msg: 'welcome Vue',
                message: '页面加载于 ' + new Date().toLocaleString()
            }
        },
        components:{
            headerComponent:Header
        }
    }
</script>