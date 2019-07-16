<template>
  <header class="header-wrapper">
    <h3>{{msg}}</h3>
  </header>
</template>
<script>
    export default {
        data() {
            return {
                msg: '主题名称',
            }
        }
    }
</script>
<style rel="stylesheet" type="text/css" lang="less" scoped>
.header-wrapper{
    background: gold;
    display:flex;
    justify-content: center;
    color:white;
}
    
</style>