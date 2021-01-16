import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
