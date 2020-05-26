import Vue from 'vue'
import Router from 'vue-router'
import Login from "../login"
import Admin from '../admin'
import Home from '../pages/home'
Vue.use(Router);
const BaseForm = ()=>import("../pages/baseForm");
const FlowForm = ()=>import("../pages/baseForm/flowForm");
const SuperForm = ()=>import("../pages/baseForm/superForm");
const Author = () =>import("../pages/authorSet");
const FormDesign = () =>import("../pages/formDesign");
const FormDesign1 = () =>import("../pages/formDesign1");
const Boom =()=>import("../pages/boom");
const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Admin',
      redirect: '/home',
      component: Admin,
      children:[
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "baseForm",
          name: "baseForm",
          component: BaseForm
        },
        {
          path: "flowForm",
          name: "flowForm",
          component: FlowForm
        },
        {
          path: "superForm",
          name: "superForm",
          component: SuperForm
        },
        {
          path: "author",
          name: "author",
          component: Author,
        },
        {
          path: "formDesign1",
          name: "formDesign1",
          component: FormDesign1
        },
        {
          path: "formDesign",
          name: "formDesign",
          component: FormDesign
        },{
          path: "boom",
          name: "Boom",
          component: Boom
        },
        // {
        //   path: "555555",
        //   name: "555555",
        //   component: FormDesign
        // }
      ]
    },
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const isToken = window.sessionStorage.getItem("token");
  if(!isToken) {
    //在守卫里拿到的this是当前实例,路由实例里的a.app是vue实例
    this.a.app.$message({
      showClose:true,
      message:"可爱的你,请重新登录",
      type:"error"
    });
    return next("/login")
  }
  next()
});

export default router
