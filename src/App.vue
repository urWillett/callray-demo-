<template>
  <div id="app">
    <el-container>
      <el-header style="height: 12vh">
        <div class="demo-image__placeholder" style="position:absolute;left: 35px;top: 25px;width: 120px">
          <div class="block">
            <el-image :src="callrayIcon"></el-image>
          </div>
        </div>
        <h1 style="position:relative;top: 12px;margin: 0">Callray Record Management System</h1>
        <div style="position:absolute;right: 40px;top: 30px" onmousemove="style.cursor='pointer'" v-on:click="gotoPage('/login')">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
      </el-header>
      <el-container style=" border: 1px solid #eee">
        <el-aside width="200px" style="height: 85vh">
          <el-menu :default-openeds="['1','2']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>Public</template>
              <el-menu-item-group>
                <template slot="title" style="text-align: left">Record</template>
                <el-menu-item index="1-1" v-on:click="gotoPage('/record_review')">Review</el-menu-item>
<!--                <el-menu-item index="1-2" v-on:click="gotoPage('/login')">Download</el-menu-item>-->
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title"><i class="el-icon-setting"></i>Manager</template>
              <el-menu-item-group>
                <template slot="title">Edit</template>
                <!--
                表达式形式:vue指令语法 v-指令名字+:+指令的参数=指令的表达式
            -->
                <el-menu-item index="3-2" v-on:click="gotoPage('/group')">Group</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>

import {Host,myPort,Protocol,User} from "./config/untils";

export default {
  name: 'App',
  components:{
    
  },
  data() {
    return {
      callrayIcon:require('D:\\Code\\vscode\\callray1\\src\\assets\\callray.jpg')
    }
  },
   methods:{
    gotoPage:function (path) {
        this.$router.push(path);//路由跳转的路径
      }
    },
  
  
}

</script>

<style>
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /*display: flex;*/
  /*margin-top: 60px;*/
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}


.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}


</style>
