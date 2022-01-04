/*配置路由*/
import Vue from 'vue'

// 导入路由插件
import Router from 'vue-router'

// 导入上面定义的组件
import Group from "../components/Group";

// 安装路由
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 配置路由
export default new Router({
  routes: [
    {
      // 路由请求路径
      path: '/group',
      // 路由名称,可以省略不写
      name: 'Group',
       // 跳转到组件
      component: Group
    }
  ]
})