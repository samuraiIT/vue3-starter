/**
 * This logic can be use by more than
 * one component (Blog, BlogDetail).
 * Import via the composable function
 */

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '/@/data/data.js'
export function useLang() {
    /**
     * Init data when View is mounted
     */
    onMounted(() => {
        let data = async () => ref(data)
    })

    /**
     * Replace data with computed property
     * based on the language and if there
     * is a parameter 'slug' in the route
     */
    const dataEn = computed(function () {
        if (route.params.slug !== undefined) {
            return data.en.filter(item => item.slug == route.params.slug)
        } else {
            return data.en
        }
    })
    const dataFr = computed(function () {
        if (route.params.slug !== undefined) {
            return data.fr.filter(item => item.slug == route.params.slug)
        } else {
            return data.fr
        }
    })

    /**
     * Create route variable to access
     * route property like 'meta'
     *
     * Set the data to corresponding
     * computed property base on page
     * language
     */
    const route = useRoute()
    const lang = ref(route.meta.lang)
    lang.value === 'en' ? (data.value = dataEn.value) : (data.value = dataFr.value)

    /**
     * Assign to 'lang' variable
     * the value of the page language
     * when there is a change of route
     * Ex: new page, langSwtich
     *
     * Change the data filter by
     * corresponding page language
     * when there is a change in the
     * route
     */

    watch(route, () => {
        route.meta.lang === 'en' ? (data.value = dataEn.value) : (data.value = dataFr.value)
        lang.value = route.meta.lang //reasign lang to page language
    })

    return { route, data, dataEn, dataFr, lang }
}
