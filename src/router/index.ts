import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: () => import("../views/dashboard/PodcastView.vue"),
    // },
    // {
    //   path: "/apps",
    //   name: "Uygulamalar",
    //   component: () => import("../views/apps/AppsView.vue"),
    // },
    {
      path: "/apps/user-detail",
      name: "MuhasebebeTik",
      component: () => import("../views/apps/AppsUserDetailView.vue"),
    },
    {
      path: "/my-information",
      name: "Bilgilerim",
      component: () => import("../views/apps/AppsMyInformation.vue"),
    },
    {
      path: "/my-transactions",
      name: "islemler",
      component: () => import("../views/apps/AppsMyTransactions.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/auth/SignupView.vue"),
    },
    { path: '/', redirect: '/apps' }
  ],
});

export default router;
