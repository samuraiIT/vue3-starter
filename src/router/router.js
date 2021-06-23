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
            path: '/documentation',
            name: 'Doc-en',
            meta: { lang: 'en' },
            component: () => import('/@/views/Doc.vue'),
        },
        {
            path: '/fr/documentation',
            name: 'Doc-fr',
            meta: { lang: 'fr' },
            component: () => import('/@/views/Doc.vue'),
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
