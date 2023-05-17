import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../components/pages/LogIn.vue"),
    meta: {},
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/pages/LogIn.vue"),
    meta: {},
  },
  {
    path: "/ForgotPassword",
    name: "Login",
    component: () => import("../components/pages/ForgotPassword.vue"),
    meta: {},
  },
  {
    path: "/service-request",
    name: "Service Request",
    component: () => import("../components/pages/ServiceRequest.vue"),
    meta: { layout: "home" },
  },
  {
    path: "/asset-equip",
    name: "Asset and Equipments",
    component: () => import("../components/pages/AssetAndEquip.vue"),
    meta: { layout: "home" },
  },
  {
    path: "/historical-details",
    name: "Historical Detail",
    component: () => import("../components/pages/HisDetail.vue"),
    meta: { layout: "home" },
  },
  {
    path: "/billing-balance",
    name: "Billing Balance",
    component: () => import("../components/pages/BillingBalance.vue"),
    meta: { layout: "home" },
  },
  {
    path: "/jobs",
    name: "Jobs Information",
    component: () => import("../components/pages/ServiceJob.vue"),
    meta: { layout: "home" },
  },
  {
    path: "/:pathMatch",
    name: "404",
    component: () => import("../components/pages/NotFoundPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
