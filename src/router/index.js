import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Sample from "@/views/Sample.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Sample",
    component: Sample,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
