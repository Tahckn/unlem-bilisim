import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/PodcastView.vue"),
    },
    {
      path: "/pages",
      name: "pages",
      component: () => import("../views/PagesView.vue"),
    },
    {
      path: "/apps",
      name: "Uygulamalar",
      component: () => import("../views/apps/AppsView.vue"),
    },
    {
      path: "/layouts",
      name: "layout",
      component: () => import("../views/LayoutsView.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/apps/user-detail",
      name: "/MuhasebebeTik",
      component: () => import("../views/apps/AppsUserDetailView.vue"),
    },
  ],
});

export default router;
