import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import i18n from "../i18n";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "Home-en",
      component: () => import("../views/Home.vue"),
      meta: { lang: "en" },
    },
    {
      path: "/fr",
      name: "Home-fr",
      component: () => import("../views/Home.vue"),
      meta: { lang: "fr" },
    },
    {
      path: "/about",
      name: "About-en",
      meta: { lang: "en" },
      component: () => import("../views/About.vue"),
    },
    {
      path: "/a-propos",
      name: "About-fr",
      meta: { lang: "fr" },
      component: () => import("../views/About.vue"),
    },
  ],
});

/**
 * After each route change, we set the lang
 * we also set the siteId to query the correct lang
 */
router.afterEach((to) => {
  if (to.meta.lang) {
    store.dispatch("ui/setLang", to.meta.lang);
    store.dispatch("ui/setSiteId", to.meta.siteId);
    i18n.global.locale = to.meta.lang;
  }
});

export default router;
