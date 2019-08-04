<template>
  <div>
    <headerComponent></headerComponent>
    <h2>{{ msg }}</h2>
    <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <button v-on:click="msg += 1">点击加字符串</button>
    <p v-if="loading">现在你看到我了</p>
    <ol>
        <li v-for="todo in todos" v-bind:key="todo.text">
        {{ todo.text }}
        </li>
    </ol>
    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary" v-on:click="showMsg">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
    </el-row>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>
<script>
import Header from './components/layout/Header';
    export default {
        data() {
            return {
                msg: 'welcome Vue',
                message: '页面加载于 ' + new Date().toLocaleString(),
                loading:true,
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                showMsg:()=>{
                    console.log(this.todos);
                    this.todos.push({ text: '下次' })
                    alert("展示信息")
                }
            }
        },
        components:{
            headerComponent:Header
        }
    }
</script>