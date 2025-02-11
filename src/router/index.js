import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/skills", component: Skills },
  { path: "/contact", component: Contact }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
