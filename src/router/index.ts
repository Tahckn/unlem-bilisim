import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/apps/user-detail/:id",
      name: "MuhasebebeTik",
      component: () => import("../views/apps/AppsUserDetailView.vue"),
      children: [
        {
          path: "general-overview",
          name: "GeneralOverview",
          component: () => import("@/views/apps/GeneralOverviewView.vue"),
        },
        {
          path: "application-info",
          name: "ApplicationInfo",
          component: () => import("@/views/apps/ApplicationInfoView.vue"),
        },
        {
          path: "connected-applications",
          name: "ConnectedApplications",
          component: () => import("@/views/apps/ConnectedApplicationsView.vue"),
        },
        {
          path: "api-info",
          name: "APIInfo",
          component: () => import("@/views/apps/APIInfoView.vue"),
        },
        {
          path: "configuration",
          name: "Configuration",
          component: () => import("@/views/apps/ConfigurationView.vue"),
        },
      ],
    },
    {
      path: "/my-information",
      name: "Bilgilerim",
      component: () => import("../views/apps/AppsMyInformation.vue"),
    },
    {
      path: "/apps",
      name: "apps",
      component: () => import("../views/apps/AppsHomeView.vue"),
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
    { path: '/', redirect: '/apps/user-detail/general-overview' }
  ],
});

export default router;