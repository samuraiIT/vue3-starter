import { createRouter, createWebHistory } from 'vue-router'
import i18n from '/@/i18n/i18n'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'Home-en',
            component: () => import('/@/views/Home.vue'),
            meta: { lang: 'en' },
        },
        {
            path: '/fr',
            name: 'Home-fr',
            component: () => import('/@/views/Home.vue'),
            meta: { lang: 'fr' },
        },
        {
            path: '/about',
            name: 'About-en',
            meta: { lang: 'en' },
            component: () => import('/@/views/About.vue'),
        },
        {
            path: '/fr/a-propos',
            name: 'About-fr',
            meta: { lang: 'fr' },
            component: () => import('/@/views/About.vue'),
        },
        {
            path: '/blog',
            name: 'Blog-en',
            meta: { lang: 'en' },
            component: () => import('/@/views/Blog.vue'),
        },
        {
            path: '/fr/blogue',
            name: 'Blog-fr',
            meta: { lang: 'fr' },
            component: () => import('/@/views/Blog.vue'),
        },
        {
            path: '/blog/:slug',
            name: 'BlogDetail-en',
            meta: { lang: 'en' },
            component: () => import('/@/views/BlogDetail.vue'),
        },
        {
            path: '/fr/blogue/:slug',
            name: 'BlogDetail-fr',
            meta: { lang: 'fr' },
            component: () => import('/@/views/BlogDetail.vue'),
        },
    ],
})

/**
 * After each route change, we set the lang
 * we also set the siteId to query the correct lang
 */
router.afterEach(to => {
    if (to.meta.lang) {
        i18n.global.locale = to.meta.lang
    }
})

export default router
