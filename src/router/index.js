import Vue from "vue";
import VueRouter from "vue-router";
import photo from "../assets/photo.png";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/Home.vue"),
    props: () => ({ photo }),
  },
  {
    path: "/skills",
    component: () => import("../components/Skills.vue"),
  },
  {
    path: "/contact",
    component: () => import("../components/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
