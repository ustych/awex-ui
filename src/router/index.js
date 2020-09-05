import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/alert",
    name: "Alert",
    // route level code-splitting
    // this generates a separate chunk (alert.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "alert" */ "../pages/Alert.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
